import { rest } from 'msw';

export const getPromise = rest.get(
  `/api/v1/promise/promise-detail/1`,
  (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          organizationName: '총학',
          Teams: [
            {
              id: 8,
              order: 1,
              slogan: '아브라카다브라 다 이루어져라',
              Runners: [
                {
                  id: 15,
                  name: '홍길동',
                  major: '사회학과',
                  studentNum: 2314223,
                  position: '정학생회장',
                  picture: '../../../../public/img/candidate/profile.png',
                  teamId: 8,
                },
                {
                  id: 16,
                  name: '박총학',
                  major: '통계학과',
                  studentNum: 2313241,
                  position: '부학생회장',
                  picture: '../../../../public/img/candidate/profile.png',
                  teamId: 8,
                },
              ],
              Promises: [
                {
                  id: 1,
                  promiseType: '소통',
                  promiseTitle: '학생식당 모니터링 제도',
                  promiseDetail:
                    '사림관, 봉림관에 위치한 학생식당에 대한 학우들의 불편을 해결해드리겠습니다. 체계적인 해결을 위해 전체 학기마다 학우분들을 대상으로 모니터링단을 선정하겠습니다. 선정된 학우님들이 가격과 메뉴 등에 대한 의견을 보고서로 제출해 주시면 모든 의견을 취합해 학생식당에 제공하겠습니다.',
                },
                {
                  id: 2,
                  promiseType: '소통',
                  promiseTitle: '교내 셔틀버스 활성화 혹은 차선책 마련',
                  promiseDetail:
                    '학우님들이 기숙사에서 수업 듣기 위해 타 건물로 이동할 때 특히 여름이나 겨울에 고역을 겪고 있습니다. 먼 거리를 다녀야 하는 학우분들을 위해 교내 셔틀버스 고장 관련 문제를 제대로 파악해 활성화 시키겠습니다. 교내 셔틀버스 활성화가 어려울 경우 차선책을 마련해 꼭 학우분들의 고생을 덜어드리겠습니다.',
                },
                {
                  id: 3,
                  promiseType: '소통',
                  promiseTitle: '교내 셔틀버스 활성화 혹은 차선책 마련',
                  promiseDetail:
                    '학우님들이 기숙사에서 수업 듣기 위해 타 건물로 이동할 때 특히 여름이나 겨울에 고역을 겪고 있습니다. 먼 거리를 다녀야 하는 학우분들을 위해 교내 셔틀버스 고장 관련 문제를 제대로 파악해 활성화 시키겠습니다. 교내 셔틀버스 활성화가 어려울 경우 차선책을 마련해 꼭 학우분들의 고생을 덜어드리겠습니다.',
                },
                {
                  id: 4,
                  promiseType: '소통',
                  promiseTitle: '교내 셔틀버스 활성화 혹은 차선책 마련',
                  promiseDetail:
                    '학우님들이 기숙사에서 수업 듣기 위해 타 건물로 이동할 때 특히 여름이나 겨울에 고역을 겪고 있습니다. 먼 거리를 다녀야 하는 학우분들을 위해 교내 셔틀버스 고장 관련 문제를 제대로 파악해 활성화 시키겠습니다. 교내 셔틀버스 활성화가 어려울 경우 차선책을 마련해 꼭 학우분들의 고생을 덜어드리겠습니다.',
                },
                {
                  id: 5,
                  promiseType: '소통',
                  promiseTitle: '학생식당 모니터링 제도',
                  promiseDetail:
                    '사림관, 봉림관에 위치한 학생식당에 대한 학우들의 불편을 해결해드리겠습니다. 체계적인 해결을 위해 전체 학기마다 학우분들을 대상으로 모니터링단을 선정하겠습니다. 선정된 학우님들이 가격과 메뉴 등에 대한 의견을 보고서로 제출해 주시면 모든 의견을 취합해 학생식당에 제공하겠습니다.',
                },
                {
                  id: 6,
                  promiseType: '소통',
                  promiseTitle: '교내 셔틀버스 활성화 혹은 차선책 마련',
                  promiseDetail:
                    '학우님들이 기숙사에서 수업 듣기 위해 타 건물로 이동할 때 특히 여름이나 겨울에 고역을 겪고 있습니다. 먼 거리를 다녀야 하는 학우분들을 위해 교내 셔틀버스 고장 관련 문제를 제대로 파악해 활성화 시키겠습니다. 교내 셔틀버스 활성화가 어려울 경우 차선책을 마련해 꼭 학우분들의 고생을 덜어드리겠습니다.',
                },
                {
                  id: 7,
                  promiseType: '소통',
                  promiseTitle: '교내 셔틀버스 활성화 혹은 차선책 마련',
                  promiseDetail:
                    '학우님들이 기숙사에서 수업 듣기 위해 타 건물로 이동할 때 특히 여름이나 겨울에 고역을 겪고 있습니다. 먼 거리를 다녀야 하는 학우분들을 위해 교내 셔틀버스 고장 관련 문제를 제대로 파악해 활성화 시키겠습니다. 교내 셔틀버스 활성화가 어려울 경우 차선책을 마련해 꼭 학우분들의 고생을 덜어드리겠습니다.',
                },
                {
                  id: 8,
                  promiseType: '소통',
                  promiseTitle: '교내 셔틀버스 활성화 혹은 차선책 마련',
                  promiseDetail:
                    '학우님들이 기숙사에서 수업 듣기 위해 타 건물로 이동할 때 특히 여름이나 겨울에 고역을 겪고 있습니다. 먼 거리를 다녀야 하는 학우분들을 위해 교내 셔틀버스 고장 관련 문제를 제대로 파악해 활성화 시키겠습니다. 교내 셔틀버스 활성화가 어려울 경우 차선책을 마련해 꼭 학우분들의 고생을 덜어드리겠습니다.',
                },
              ],
              Qna: [
                {
                  id: 2,
                  type: 'question',
                  comment: '이런 공약을 낸 이유가 무엇인가요?',
                  time: 1618239463,
                },
                {
                  id: 6,
                  type: 'answer',
                  comment: '그 이유는 무엇입니다.',
                  time: 1618239498,
                },
                {
                  id: 4,
                  type: 'question',
                  comment: '이런 공약을 낸 이유가 무엇인가요?22222',
                  time: 1618239463,
                },
                {
                  id: 5,
                  type: 'answer',
                  comment: '그 이유는 무엇입니다.222222222',
                  time: 1618239498,
                },
              ],
            },
            {
              id: 9,
              order: 2,
              slogan: '2팀 만세 만세',
              Runners: [
                {
                  id: 15,
                  name: '홍길동',
                  major: '사회학과',
                  studentNum: 2314223,
                  position: '정학생회장',
                  picture: '../../../../public/img/candidate/profile.png',
                  teamId: 8,
                },
                {
                  id: 16,
                  name: '박총학',
                  major: '통계학과',
                  studentNum: 2313241,
                  position: '부학생회장',
                  picture: '../../../../public/img/candidate/profile.png',
                  teamId: 8,
                },
              ],
              Promises: [
                {
                  id: 1,
                  promiseType: '소통',
                  promiseTitle: '학생식당 모니터링 제도',
                  promiseDetail:
                    '사림관, 봉림관에 위치한 학생식당에 대한 학우들의 불편을 해결해드리겠습니다. 체계적인 해결을 위해 전체 학기마다 학우분들을 대상으로 모니터링단을 선정하겠습니다. 선정된 학우님들이 가격과 메뉴 등에 대한 의견을 보고서로 제출해 주시면 모든 의견을 취합해 학생식당에 제공하겠습니다.',
                },
                {
                  id: 2,
                  promiseType: '소통',
                  promiseTitle: '교내 셔틀버스 활성화 혹은 차선책 마련',
                  promiseDetail:
                    '학우님들이 기숙사에서 수업 듣기 위해 타 건물로 이동할 때 특히 여름이나 겨울에 고역을 겪고 있습니다. 먼 거리를 다녀야 하는 학우분들을 위해 교내 셔틀버스 고장 관련 문제를 제대로 파악해 활성화 시키겠습니다. 교내 셔틀버스 활성화가 어려울 경우 차선책을 마련해 꼭 학우분들의 고생을 덜어드리겠습니다.',
                },
              ],
              Qna: [
                {
                  id: 2,
                  type: 'question',
                  comment: '2번님 이게 공약인가요?',
                  time: 1618239463,
                },
                {
                  id: 6,
                  type: 'answer',
                  comment: '네 이게 공약입니다',
                  time: 1618239498,
                },
                {
                  id: 4,
                  type: 'question',
                  comment: '이런 공약을 낸 이유가 무엇인가요? 2번님',
                  time: 1618239463,
                },
                {
                  id: 5,
                  type: 'answer',
                  comment: '그 이유는 무엇입니다. 크루원님',
                  time: 1618239498,
                },
                {
                  id: 7,
                  type: 'question',
                  comment:
                    '2번님 이게 공약인가요?2번님 이게 공약인가요?2번님 이게 공약인가요?2번님 이게 공약인가요?2번님 이게 공약인가요?2번님 이게 공약인가요?2번님 이게 공약인가요?2번님 이게 공약인가요?2번님 이게 공약인가요?2번님 이게 공약인가요?2번님 이게 공약인가요?2번님 이게 공약인가요?2번님 이게 공약인가요?2번님 이게 공약인가요?2번님 이게 공약인가요?2번님 이게 공약인가요?2번님 이게 공약인가요?',
                  time: 1618239463,
                },
                {
                  id: 8,
                  type: 'answer',
                  comment:
                    '네 이게 공약입니다네 이게 공약입니다네 이게 공약입니다네 이게 공약입니다네 이게 공약입니다네 이게 공약입니다네 이게 공약입니다네 이게 공약입니다네 이게 공약입니다네 이게 공약입니다네 이게 공약입니다네 이게 공약입니다네 이게 공약입니다네 이게 공약입니다네 이게 공약입니다네 이게 공약입니다네 이게 공약입니다네 이게 공약입니다',
                  time: 1618239498,
                },
                {
                  id: 9,
                  type: 'question',
                  comment: '이런 공약을 낸 이유가 무엇인가요? 2번님',
                  time: 1618239463,
                },
                {
                  id: 10,
                  type: 'answer',
                  comment: '그 이유는 무엇입니다. 크루원님',
                  time: 1618239498,
                },
              ],
            },
            {
              id: 10,
              order: 3,
              slogan: '각 후보의 슬로건을 적어 넣습니다.',
              Runners: [
                {
                  id: 15,
                  name: '홍길동',
                  major: '사회학과',
                  studentNum: 2314223,
                  position: '정학생회장',
                  picture: '../../../../public/img/candidate/profile.png',
                  teamId: 8,
                },
                {
                  id: 16,
                  name: '박총학',
                  major: '통계학과',
                  studentNum: 2313241,
                  position: '부학생회장',
                  picture: '../../../../public/img/candidate/profile.png',
                  teamId: 8,
                },
              ],
              Promises: [
                {
                  id: 1,
                  promiseType: '소통',
                  promiseTitle: '학생식당 모니터링 제도',
                  promiseDetail:
                    '사림관, 봉림관에 위치한 학생식당에 대한 학우들의 불편을 해결해드리겠습니다. 체계적인 해결을 위해 전체 학기마다 학우분들을 대상으로 모니터링단을 선정하겠습니다. 선정된 학우님들이 가격과 메뉴 등에 대한 의견을 보고서로 제출해 주시면 모든 의견을 취합해 학생식당에 제공하겠습니다.',
                },
                {
                  id: 2,
                  promiseType: '소통',
                  promiseTitle: '교내 셔틀버스 활성화 혹은 차선책 마련',
                  promiseDetail:
                    '학우님들이 기숙사에서 수업 듣기 위해 타 건물로 이동할 때 특히 여름이나 겨울에 고역을 겪고 있습니다. 먼 거리를 다녀야 하는 학우분들을 위해 교내 셔틀버스 고장 관련 문제를 제대로 파악해 활성화 시키겠습니다. 교내 셔틀버스 활성화가 어려울 경우 차선책을 마련해 꼭 학우분들의 고생을 덜어드리겠습니다.',
                },
              ],
              Qna: [
                {
                  id: 2,
                  type: 'question',
                  comment: '이런 공약을 낸 이유가 무엇인가요?',
                  time: 1618239463,
                },
                {
                  id: 6,
                  type: 'answer',
                  comment: '그 이유는 무엇입니다.',
                  time: 1618239498,
                },
              ],
            },
            {
              id: 11,
              order: 4,
              slogan: '각 후보의 슬로건을 적어 넣습니다.',
              Runners: [
                {
                  id: 15,
                  name: '홍길동',
                  major: '사회학과',
                  studentNum: 2314223,
                  position: '정학생회장',
                  picture: '../../../../public/img/candidate/profile.png',
                  teamId: 8,
                },
                {
                  id: 16,
                  name: '박총학',
                  major: '통계학과',
                  studentNum: 2313241,
                  position: '부학생회장',
                  picture: '../../../../public/img/candidate/profile.png',
                  teamId: 8,
                },
              ],
              Promises: [
                {
                  id: 1,
                  promiseType: '소통',
                  promiseTitle: '학생식당 모니터링 제도',
                  promiseDetail:
                    '사림관, 봉림관에 위치한 학생식당에 대한 학우들의 불편을 해결해드리겠습니다. 체계적인 해결을 위해 전체 학기마다 학우분들을 대상으로 모니터링단을 선정하겠습니다. 선정된 학우님들이 가격과 메뉴 등에 대한 의견을 보고서로 제출해 주시면 모든 의견을 취합해 학생식당에 제공하겠습니다.',
                },
                {
                  id: 2,
                  promiseType: '소통',
                  promiseTitle: '교내 셔틀버스 활성화 혹은 차선책 마련',
                  promiseDetail:
                    '학우님들이 기숙사에서 수업 듣기 위해 타 건물로 이동할 때 특히 여름이나 겨울에 고역을 겪고 있습니다. 먼 거리를 다녀야 하는 학우분들을 위해 교내 셔틀버스 고장 관련 문제를 제대로 파악해 활성화 시키겠습니다. 교내 셔틀버스 활성화가 어려울 경우 차선책을 마련해 꼭 학우분들의 고생을 덜어드리겠습니다.',
                },
              ],
              Qna: [
                {
                  id: 2,
                  type: 'question',
                  comment: '이런 공약을 낸 이유가 무엇인가요?',
                  time: 1618239463,
                },
                {
                  id: 6,
                  type: 'answer',
                  comment: '그 이유는 무엇입니다.',
                  time: 1618239498,
                },
              ],
            },
          ],
        },
      ])
    )
);
