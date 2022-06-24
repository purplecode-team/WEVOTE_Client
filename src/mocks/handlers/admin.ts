import { rest } from 'msw';

export const getBanner = rest.get('/api/v1/admin/banner', (req, res, ctx) =>
  res(
    ctx.status(200),
    ctx.json([
      {
        id: 1,
        content:
          '투표해라투표해라투표해라투표해라투표해라투표해라투표해라투표해라투표해라투표해라투표해라',
        startDate: '2021-03-03T00:00:00.000Z',
        endDate: '2021-03-08T00:00:00.000Z',
      },
      {
        id: 2,
        content: '꼭꼭 투표하세용2222',
        startDate: '2021-03-03T00:00:00.000Z',
        endDate: '2021-03-08T00:00:00.000Z',
      },
      {
        id: 3,
        content: '꼭꼭 투표하세용333333',
        startDate: '2021-03-03T00:00:00.000Z',
        endDate: '2021-03-08T00:00:00.000Z',
      },
    ])
  )
);

export const getInfo = rest.get('/api/v1/admin/info', (req, res, ctx) =>
  res(
    ctx.status(200),
    ctx.json([
      {
        id: 1,
        image:
          'https://gpbucket-bomi.s3.ap-northeast-2.amazonaws.com/info/1625247316487.png',
      },
      {
        id: 2,
        image:
          'https://gpbucket-bomi.s3.ap-northeast-2.amazonaws.com/info/1625247316491.png',
      },
      {
        id: 3,
        image:
          'https://gpbucket-bomi.s3.ap-northeast-2.amazonaws.com/info/1625247316558.png',
      },
      {
        id: 4,
        image:
          'https://gpbucket-bomi.s3.ap-northeast-2.amazonaws.com/info/1625247316559.png',
      },
      {
        id: 5,
        image:
          'https://gpbucket-bomi.s3.ap-northeast-2.amazonaws.com/info/1625247316569.png',
      },
    ])
  )
);

export const getCategory = rest.get('/api/v1/admin/category', (req, res, ctx) =>
  res(
    ctx.status(200),
    ctx.json([
      {
        top: '중앙자치기구',
        middle: [
          {
            id: 1,
            organizationName: '총학생회',
          },
          {
            id: 2,
            organizationName: '동아리연합회',
          },
        ],
      },
      {
        top: '단과대',
        middle: [
          {
            id: 11,
            organizationName: '사회대학',
          },
          {
            id: 12,
            organizationName: '공과대학',
          },
        ],
      },
      {
        top: '학과',
        middle: [
          {
            organizationName: '사회대학',
            Majors: [
              {
                id: 102,
                organizationName: '경제학과',
              },
              {
                id: 101,
                organizationName: '정치외교학과',
              },
            ],
          },
          {
            organizationName: '공과대학',
            Majors: [
              {
                id: 104,
                organizationName: '컴퓨터공학과',
              },
              {
                id: 103,
                organizationName: '기계공학과',
              },
            ],
          },
        ],
      },
    ])
  )
);
