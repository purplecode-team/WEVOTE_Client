declare module 'candidateType' {
  export interface Major {
    id: number;
    organizationName: string;
    Teams: Team[];
  }

  export interface HasBottomType {
    id: number;
    organizationName: string;
    Majors: Major[];
  }

  export interface HasMiddleType {
    id: number;
    organizationName: string;
    Teams: Team[];
  }

  export interface ClassificationDataType {
    central: HasMiddleType[];
    college: HasMiddleType[];
    major: HasBottomType[];
  }

  export interface CandidateType {
    id: number;
    order: number;
    slogan: string;
    categoryName: string;
    categoryDetail: string;
    majorName: string;
    Runners: Runner[];
    Promises: PromiseType[];
    organizationId: number;
  }

  export interface Runner {
    id?: number;
    name: string;
    major: string;
    studentNum: number;
    position: string;
    picture: string;
    teamId?: number;
  }

  export interface PromiseType {
    id?: number;
    promiseType: string;
    promiseTitle: string;
    promiseDetail: string;
    teamId?: number;
  }

  export interface PromiseArr {
    pledgeArr: PromiseType[];
    slogan: string;
  }

  export interface comment {
    comment?: string;
    time?: number;
  }

  export interface question {
    id?: number;
    question?: string;
    time?: number;
    answer?: comment[];
  }

  export interface qnaInfo {
    id: number;
    type: string;
    comment: string;
    time: number;
  }

  export interface qnaArr {
    qnaArr: qnaInfo[];
  }

  export interface Team {
    id: number;
    order: number;
    slogan: string;
    Runners: Runner[];
    Promises?: PromiseType[];
    qna?: question[];
  }
}
