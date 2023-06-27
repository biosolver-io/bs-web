export interface Degree {
  name?: string;
  field?: string;
  country?: string;
  university?: string;
  start?: string;
  end?: string;
  currentlyStudying?: boolean;
  accomplishments?: Accomplishment[];
}

export interface Accomplishment {
  name?: string;
  type?: string;
  certificate?: FileList;
  link?: string;
  id?: string;
  publisher?: string;
  title?: string;
}