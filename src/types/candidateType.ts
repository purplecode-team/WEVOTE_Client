
export type Major = {
  id: number;
  organizationName: string;
  Teams: Team[];
};
export type HasBottomType = {
  id: number;
  organizationName: string;
  Majors: Major[];
};
export type HasMiddleType = {
  id: number;
  organizationName: string;
  Teams: Team[];
};
export type CandidateDataType = {
  central: HasMiddleType[];
  college: HasMiddleType[];
  major: HasBottomType[];
};


export type Runner = {
  id: number;
  name: string;
  major: string;
  studentNum: number;
  position: string;
  picture?: string;
  teamId: number;
};

export type Promise = {
  id?: number;
  promiseType?: string;
  promiseTitle?: string;
  promiseDetail?: string;
};

export type comment = {
  comment?: string;
  time?: number;
};

export type question = {
  id?: number;
  question?: string;
  time?: number;
  answer?: comment[];
};

export type Team = {
  id: number;
  order: number;
  slogan: string;
  Runners: Runner[];
  Promises?: Promise[];
  qna?: question[];
};
