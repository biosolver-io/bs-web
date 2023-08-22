
import { Storage } from '@google-cloud/storage';
import { UploadHandler } from '@remix-run/node';
import { writeAsyncIterableToWritable } from "@remix-run/node";
import { Upload } from '@aws-sdk/lib-storage';
import { S3Client } from '@aws-sdk/client-s3';
import { Duplex, Stream, Writable } from 'stream';

const storage = new S3Client({
  endpoint: STORAGE_ENDPOINT,
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
  return new Upload({
    client: storage,
    leavePartsOnError: false,
    params: {
      Bucket: 'bs-solver-application-documents',
      Key: fileName,
      Body: writeStream,
    },
  }).done();
}

export const cloudStorageUploaderHandler: UploadHandler = async ({
  filename,
  data: fileStream,
}) => {
  return await uploadStreamToCloudStorage(fileStream, filename || Date.now().toString());
};