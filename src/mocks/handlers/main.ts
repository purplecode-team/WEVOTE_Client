import { rest } from 'msw';

export const getSearch = rest.get('/api/v1/main/search', (req, res, ctx) =>
  res(
    ctx.status(200),
    ctx.json([
      {
        id: 12,
        name: '공과대학',
      },
      {
        id: 11,
        name: '인문대학',
      },
      {
        id: 13,
        name: '자연대학',
      },
      {
        id: 2,
        name: '동아리연합회',
      },
      {
        id: 1,
        name: '총학',
      },
      {
        id: 104,
        name: '국어국문학과',
      },
      {
        id: 103,
        name: '기계공학과',
      },
      {
        id: 105,
        name: '영어영문학과',
      },
      {
        id: 102,
        name: '전기전기공학부',
      },
      {
        id: 101,
        name: '컴퓨터공학과',
      },
      {
        id: 106,
        name: '화학과',
      },
    ])
  )
);

export const getCalendar = rest.get('/api/v1/main/calendar', (req, res, ctx) =>
  res(
    ctx.status(200),
    ctx.json({
      id: 1,
      image: "'../../../public/mock/main/calendar.png",
    })
  )
);

export const getBanner = rest.get('/api/v1/main/banner', (req, res, ctx) =>
  res(
    ctx.status(200),
    ctx.json([
      {
        id: 1,
        content: '꼭꼭 투표하세용',
        startDate: '2021-03-03T00:00:00.000Z',
        endDate: '2021-03-08T00:00:00.000Z',
      },
      {
        id: 2,
        content: '투표 하셨나용',
        startDate: '2021-03-03T00:00:00.000Z',
        endDate: '2021-03-08T00:00:00.000Z',
      },
      {
        id: 1,
        content: '총학생회 선거마감 D-Day',
        startDate: '2021-03-03T00:00:00.000Z',
        endDate: '2021-03-08T00:00:00.000Z',
      },
    ])
  )
);

export const getElection = rest.get('/api/v1/main/election', (req, res, ctx) =>
  res(
    ctx.status(200),
    ctx.json([
      {
        id: 1,
        name: '총학생회',
        numOfTeam: 3,
        type: '경선',
        startDate: '2020-03-01T00:00:00.000Z',
        endDate: '2020-03-10T00:00:00.000Z',
      },
      {
        id: 2,
        name: '동아리어쩌구',
        numOfTeam: 2,
        type: '경선',
        startDate: '2020-03-02T00:00:00.000Z',
        endDate: '2020-03-13T00:00:00.000Z',
      },
      {
        id: 3,
        name: '총어쩌구',
        numOfTeam: 2,
        type: '경선',
        startDate: '2020-03-02T00:00:00.000Z',
        endDate: '2020-03-13T00:00:00.000Z',
      },
      {
        id: 4,
        name: '학생복지어쩌구',
        numOfTeam: 2,
        type: '경선',
        startDate: '2020-03-02T00:00:00.000Z',
        endDate: '2020-03-13T00:00:00.000Z',
      },
    ])
  )
);

export const getMain = rest.get('/api/v1/main/all', (req, res, ctx) =>
  res(
    ctx.status(200),
    ctx.json({
      central: [
        {
          id: 1,
          organizationName: '총학생회',
          Teams: [
            {
              id: 1,
              order: 1,
              slogan: '총학짱',
              Runners: [
                {
                  id: 15,
                  name: '이총학',
                  major: '사회학과',
                  studentNum: 2314223,
                  position: '정학생회장',
                  picture: '../../../../public/img/candidate/candidate1.png',
                  teamId: 1,
                },
                {
                  id: 16,
                  name: '박총학',
                  major: '통계학과',
                  studentNum: 2313241,
                  position: '부학생회장',
                  picture: '../../../../public/img/candidate/candidate2.png',
                  teamId: 1,
                },
              ],
            },
            {
              id: 2,
              order: 2,
              slogan: '총학짱',
              Runners: [
                {
                  id: 15,
                  name: '이총학',
                  major: '사회학과',
                  studentNum: 2314223,
                  position: '정학생회장',
                  picture: '../../../../public/img/candidate/candidate1.png',
                  teamId: 1,
                },
                {
                  id: 16,
                  name: '박총학',
                  major: '통계학과',
                  studentNum: 2313241,
                  position: '부학생회장',
                  picture: '../../../../public/img/candidate/candidate2.png',
                  teamId: 1,
                },
              ],
            },
            {
              id: 3,
              order: 3,
              slogan: '총학짱',
              Runners: [
                {
                  id: 15,
                  name: '이총학',
                  major: '사회학과',
                  studentNum: 2314223,
                  position: '정학생회장',
                  picture: '../../../../public/img/candidate/candidate1.png',
                  teamId: 1,
                },
                {
                  id: 16,
                  name: '박총학',
                  major: '통계학과',
                  studentNum: 2313241,
                  position: '부학생회장',
                  picture: '../../../../public/img/candidate/candidate2.png',
                  teamId: 1,
                },
              ],
            },
          ],
        },
        {
          id: 2,
          organizationName: '동아리연합회',
          Teams: [
            {
              id: 2,
              order: 1,
              slogan: '동연짱',
              Runners: [
                {
                  id: 15,
                  name: '이총학',
                  major: '사회학과',
                  studentNum: 2314223,
                  position: '정학생회장',
                  picture: '../../../../public/img/candidate/candidate1.png',
                  teamId: 1,
                },
                {
                  id: 16,
                  name: '박총학',
                  major: '통계학과',
                  studentNum: 2313241,
                  position: '부학생회장',
                  picture: '../../../../public/img/candidate/candidate2.png',
                  teamId: 1,
                },
              ],
            },
            {
              id: 3,
              order: 2,
              slogan: '동연짱',
              Runners: [
                {
                  id: 15,
                  name: '이총학',
                  major: '사회학과',
                  studentNum: 2314223,
                  position: '정학생회장',
                  picture: '../../../../public/img/candidate/candidate1.png',
                  teamId: 2,
                },
                {
                  id: 16,
                  name: '박총학',
                  major: '통계학과',
                  studentNum: 2313241,
                  position: '부학생회장',
                  picture: '../../../../public/img/candidate/candidate2.png',
                  teamId: 2,
                },
              ],
            },
            {
              id: 4,
              order: 3,
              slogan: '동연짱',
              Runners: [
                {
                  id: 15,
                  name: '이총학',
                  major: '사회학과',
                  studentNum: 2314223,
                  position: '정학생회장',
                  picture: '../../../../public/img/candidate/candidate1.png',
                  teamId: 3,
                },
                {
                  id: 16,
                  name: '박총학',
                  major: '통계학과',
                  studentNum: 2313241,
                  position: '부학생회장',
                  picture: '../../../../public/img/candidate/candidate2.png',
                  teamId: 3,
                },
              ],
            },
            {
              id: 5,
              order: 4,
              slogan: '동연짱',
              Runners: [
                {
                  id: 15,
                  name: '이총학',
                  major: '사회학과',
                  studentNum: 2314223,
                  position: '정학생회장',
                  picture: '../../../../public/img/candidate/candidate1.png',
                  teamId: 4,
                },
                {
                  id: 16,
                  name: '박총학',
                  major: '통계학과',
                  studentNum: 2313241,
                  position: '부학생회장',
                  picture: '../../../../public/img/candidate/candidate2.png',
                  teamId: 4,
                },
              ],
            },
          ],
        },
      ],
      college: [
        {
          id: 2,
          organizationName: '공과대',
          Teams: [
            {
              id: 5,
              order: 1,
              slogan: '공데짱',
              Runners: [
                {
                  id: 9,
                  name: '홍구동',
                  major: '기계공학과',
                  studentNum: 123123,
                  position: '공동대표',
                  picture: '../../../../public/img/candidate/profile.png',
                  teamId: 5,
                },
                {
                  id: 10,
                  name: '홍십동',
                  major: '산업공학과',
                  studentNum: 231214,
                  position: '공동대표',
                  picture: '../../../../public/img/candidate/profile.png',
                  teamId: 5,
                },
              ],
            },
            {
              id: 6,
              order: 2,
              slogan: '공데에공데에',
              Runners: [
                {
                  id: 11,
                  name: '김흥부',
                  major: '생명공학과',
                  studentNum: 123124,
                  position: '정학생회장',
                  picture: '../../../../public/img/candidate/profile.png',
                  teamId: 6,
                },
                {
                  id: 12,
                  name: '김놀부',
                  major: '화학공학과',
                  studentNum: 1231433,
                  position: '부학생회장',
                  picture: '../../../../public/img/candidate/profile.png',
                  teamId: 6,
                },
              ],
            },
          ],
        },
        {
          id: 1,
          organizationName: '인문대학',
          Teams: [
            {
              id: 7,
              order: 1,
              slogan: '인문대짱',
              Runners: [
                {
                  id: 13,
                  name: '김장화',
                  major: '불어불문학과',
                  studentNum: 123141,
                  position: '정학생회장',
                  picture: '../../../../public/img/candidate/profile.png',
                  teamId: 7,
                },
                {
                  id: 14,
                  name: '김홍련',
                  major: '철학과',
                  studentNum: 2324123,
                  position: '부학생회장',
                  picture: '../../../../public/img/candidate/profile.png',
                  teamId: 7,
                },
              ],
            },
          ],
        },
        {
          id: 3,
          organizationName: '자연대학',
          Teams: [],
        },
      ],
      major: [
        {
          id: 2,
          organizationName: '공과대',
          Majors: [
            {
              id: 3,
              organizationName: '기계공학과',
              Teams: [],
            },
            {
              id: 2,
              organizationName: '전자전기공학부',
              Teams: [],
            },
            {
              id: 4,
              organizationName: '기계공학과2',
              Teams: [],
            },
            {
              id: 5,
              organizationName: '전자전기공학부2',
              Teams: [],
            },
            {
              id: 1,
              organizationName: '컴퓨터공학과',
              Teams: [
                {
                  id: 2,
                  order: 2,
                  slogan: '유캔두잇!',
                  Runners: [
                    {
                      id: 3,
                      name: '홍삼동',
                      major: '컴퓨터공학과',
                      studentNum: 1234123,
                      position: '정학생회장',
                      picture: '../../../../public/img/candidate/profile.png',
                      teamId: 2,
                    },
                    {
                      id: 4,
                      name: '홍사동',
                      major: '컴퓨터공학과',
                      studentNum: 1234122,
                      position: '정학생회장',
                      picture: '../../../../public/img/candidate/profile.png',
                      teamId: 2,
                    },
                  ],
                },
                {
                  id: 1,
                  order: 1,
                  slogan: '할수있다!',
                  Runners: [
                    {
                      id: 1,
                      name: '홍길동',
                      major: '컴퓨터공학과',
                      studentNum: 1929132,
                      position: '정학생회장',
                      picture: '../../../../public/img/candidate/profile.png',
                      teamId: 1,
                    },
                    {
                      id: 2,
                      name: '홍이동',
                      major: '컴퓨터공학과',
                      studentNum: 1234123,
                      position: '부학생회장',
                      picture: '../../../../public/img/candidate/profile.png',
                      teamId: 1,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 1,
          organizationName: '인문대학',
          Majors: [
            {
              id: 2,
              organizationName: '영어영문학과',
              Teams: [],
            },
            {
              id: 1,
              organizationName: '국어국문학과',
              Teams: [
                {
                  id: 4,
                  order: 4,
                  slogan: '가가가ㅏ악',
                  Runners: [
                    {
                      id: 7,
                      name: '홍칠동',
                      major: '국어국문학과',
                      studentNum: 2222223,
                      position: '정학생회장',
                      picture: '../../../../public/img/candidate/profile.png',
                      teamId: 4,
                    },
                    {
                      id: 8,
                      name: '홍팔동',
                      major: '국어국문학과',
                      studentNum: 22122223,
                      position: '부학생회장',
                      picture: '../../../../public/img/candidate/profile.png',
                      teamId: 4,
                    },
                  ],
                },
                {
                  id: 3,
                  order: 3,
                  slogan: '아아악',
                  Runners: [
                    {
                      id: 5,
                      name: '홍오동',
                      major: '국어국문학과',
                      studentNum: 11111111,
                      position: '정학생회장',
                      picture: '../../../../public/img/candidate/profile.png',
                      teamId: 3,
                    },
                    {
                      id: 6,
                      name: '홍육동',
                      major: '국어국문학과',
                      studentNum: 222222,
                      position: '정학생회장',
                      picture: '../../../../public/img/candidate/profile.png',
                      teamId: 3,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 3,
          organizationName: '자연대학',
          Majors: [
            {
              id: 2,
              organizationName: '영어영문학과',
              Teams: [],
            },
            {
              id: 1,
              organizationName: '국어국문학과',
              Teams: [
                {
                  id: 4,
                  order: 4,
                  slogan: '가가가ㅏ악',
                  Runners: [
                    {
                      id: 7,
                      name: '홍칠동',
                      major: '국어국문학과',
                      studentNum: 2222223,
                      position: '정학생회장',
                      picture: '../../../../public/img/candidate/profile.png',
                      teamId: 4,
                    },
                    {
                      id: 8,
                      name: '홍팔동',
                      major: '국어국문학과',
                      studentNum: 22122223,
                      position: '부학생회장',
                      picture: '../../../../public/img/candidate/profile.png',
                      teamId: 4,
                    },
                  ],
                },
                {
                  id: 3,
                  order: 3,
                  slogan: '아아악',
                  Runners: [
                    {
                      id: 5,
                      name: '홍오동',
                      major: '국어국문학과',
                      studentNum: 11111111,
                      position: '정학생회장',
                      picture: '../../../../public/img/candidate/profile.png',
                      teamId: 3,
                    },
                    {
                      id: 6,
                      name: '홍육동',
                      major: '국어국문학과',
                      studentNum: 222222,
                      position: '정학생회장',
                      picture: '../../../../public/img/candidate/profile.png',
                      teamId: 3,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    })
  )
);
