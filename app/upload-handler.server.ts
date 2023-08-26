
import { Storage } from '@google-cloud/storage';
import { UploadHandler } from '@remix-run/node';
import { writeAsyncIterableToWritable } from "@remix-run/node";
import { Upload } from '@aws-sdk/lib-storage';
import { S3Client } from '@aws-sdk/client-s3';
import { Duplex, Stream, Writable } from 'stream';
import { createClient } from '@supabase/supabase-js';

const storage = new S3Client({
  endpoint: 'http://s3.amazonaws.com/',
  credentials: {
    accessKeyId: 'AKIAZ7CTBDZGEZEB6ENW',
    secretAccessKey: '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',
  },

  // This is only needed for the AWS SDK and it must be set to their region
  region: 'us-east-1',
});

const uploadStreamToCloudStorage = async (fileStream: AsyncIterable<Uint8Array>, fileName: string) => {
  try {
    const bucketName = 'bs-user-documents';

    // Create Cloud Storage client
    const cloudStorage = new Storage();

    // Create a reference to the file.
    const file = cloudStorage.bucket(bucketName).file(fileName);

    async function streamFileUpload() {
      await writeAsyncIterableToWritable(
        fileStream,
        file.createWriteStream()
      );

      console.log(`${fileName} uploaded to ${bucketName}`);
    }

    streamFileUpload().catch(console.error);

    return file.cloudStorageURI.toString();
  } catch (error) {
    console.error(error);
    return ''
  }
};

const uploadStreamToS3 = async (fileStream: AsyncIterable<Uint8Array>, fileName: string) => {
  const writeStream = new Duplex()
  await writeAsyncIterableToWritable(
    fileStream,
    writeStream
  );
  const uploaded = await new Upload({
    client: storage,
    leavePartsOnError: false,
    params: {
      Bucket: 'bs-solver-application-documents',
      Key: fileName,
      Body: writeStream,
    },
  }).done();

  return uploaded.Location;
}

const supabase = createClient('https://kkppsfrqongueliewefs.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtrcHBzZnJxb25ndWVsaWV3ZWZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc4MjkxNjYsImV4cCI6MjAwMzQwNTE2Nn0.NjQbf0flnN1ht7n_ex2L6iUX7WAhlswzYnQfRsdt3Cw')
const uploadStreamToSupasebaseStorage = async (file: File, fileName: string) => {

  const bucketName = 'bs-documents';

  const { data, error } = await supabase
    .storage
    .from(bucketName)
    .upload(`solver/${fileName}`, file, {
      cacheControl: '3600',
      upsert: true
    })
  if (error) {
    console.error(error);
    return `error://${error.message}`
  }
  if (!data) {
    return `error://No data returned from supabase`
  }
  return data.path
};

export const cloudStorageUploaderHandler: UploadHandler = async ({
  filename,
  data: fileStream,
}) => {
  return await uploadStreamToCloudStorage(fileStream, filename || Date.now().toString());
};

export const s3UploaderHandler: UploadHandler = async ({
  filename,
  data: fileStream,
}) => {
  return await uploadStreamToS3(fileStream, filename || Date.now().toString());
};

export const supabaseStorageUploaderHandler: (userId: string) => UploadHandler = (userId) => {
  return async ({
    filename,
    data,
    contentType,
    name,
  }) => {    
    if (filename) {
      const dataArray = [];

      for await (const x of data) {
        dataArray.push(x);
      }

      const fileInstance = new File(dataArray, `${userId}_${filename}`, { type: contentType });
      return await uploadStreamToSupasebaseStorage(fileInstance, `${userId}_${filename}`);
    }
  }
}