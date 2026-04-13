import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'Simple Schedule App (SSA)',
      startedAt: '2025-03',
      where: '개인 프로젝트',
      descriptions: [
        {
          content: '과외 선생님-학생 매칭 및 선착순 수강신청 서비스',
          weight: 'MEDIUM',
        },
        {
          content: 'https://github.com/jungsehui/simple-schedule-app-be',
          href: 'https://github.com/jungsehui/simple-schedule-app-be',
        },
        {
          content: '동시성 제어 — 12배 개선 (16.29s → 0.73s)',
          weight: 'BOLD',
          descriptions: [
            {
              content: 'P: 1만 명 동시 접속 시 선착순 100석 수강신청, 동시성 제어 필수',
            },
            {
              content:
                'A: Redis 분산 락은 RTT 오버헤드가 병목. 단일 DB 환경에서는 DB 락이 유리. "락 자체가 필요한가?" → Redis 싱글 스레드 특성상 DECR 자체가 원자적',
            },
            {
              content: 'A: K6 부하 테스트로 3종 전략(분산 락/비관적 락/Atomic) 수치 비교',
            },
            {
              content: 'R: 16.29s → 0.73s (12배 개선)',
              weight: 'SEMI_BOLD',
            },
          ],
        },
        {
          content: '이벤트 아키텍처 & 정합성 100%',
          weight: 'BOLD',
          descriptions: [
            {
              content: 'P: 수강신청-알림 강결합으로 알림 실패 시 수강신청까지 롤백',
            },
            {
              content: 'A: Kafka로 분리 시 DB 커밋-Kafka 발행 간 이중 쓰기 문제 발생',
            },
            {
              content: 'A: 트랜잭셔널 아웃박스 패턴 도입 + Consumer 멱등성 처리',
            },
            {
              content: 'R: 메시지 유실 0건, 중복 소비 0건',
              weight: 'SEMI_BOLD',
            },
          ],
        },
        {
          content: '알림 23배 개선 (6.4s → 0.27s)',
          weight: 'BOLD',
          descriptions: [
            {
              content: 'P: 500명 알림 순차 발송 6.4초 소요',
            },
            {
              content: 'A: 가상 스레드 → Kafka 브로커 과부하 + HikariCP 데드락 → 비동기 포기',
            },
            {
              content: 'A: 배치 사이즈 기반 동기식 처리 + 플랫폼 스레드 풀 200 튜닝',
            },
            {
              content: 'R: 0.27s, 실패율 0%',
              weight: 'SEMI_BOLD',
            },
          ],
        },
        {
          content: 'SSE + FCM 하이브리드 알림',
          weight: 'BOLD',
          descriptions: [
            {
              content: '접속 유저(SSE) / 미접속 유저(FCM) 분기',
            },
            {
              content: 'Redis Pub/Sub으로 다중 서버 이벤트 브로드캐스트',
            },
          ],
        },
        {
          content: 'Tech Stack: Java 21, Spring Boot 3.x, Redis, Kafka, MySQL, K6',
          weight: 'LIGHT',
        },
      ],
    },
    {
      title: '이조핑 (Ejoping)',
      startedAt: '2024-10',
      endedAt: '2024-12',
      where: '팀 프로젝트 (NHN Academy)',
      descriptions: [
        {
          content: '온라인 인터넷 서점',
          weight: 'MEDIUM',
        },
        {
          content: 'https://github.com/nhnacademy-be7-2joping',
          href: 'https://github.com/nhnacademy-be7-2joping',
        },
        {
          content: 'CI/CD — 배포 83% 단축 (30분 → 5분)',
          weight: 'BOLD',
          descriptions: [
            {
              content: 'P: 수동 배포 30분, 매주 배포가 팀의 두려움',
            },
            {
              content: 'A: 단순 재배포 vs 롤링 배포 비교 → Nginx upstream 제어 방식 채택',
            },
            {
              content: 'A: GitHub Actions + Docker + 쉘 스크립트 롤링 배포',
            },
            {
              content: 'R: 30분 → 5분, 다운타임 0초',
              weight: 'SEMI_BOLD',
            },
          ],
        },
        {
          content: '운영 안정성',
          weight: 'BOLD',
          descriptions: [
            {
              content: 'Logback 패키지별 로그 분리 → 장애 파악 5분 이내',
            },
            {
              content: 'HikariCP maxLifetime 튜닝 → DB 연결 끊김 0건',
            },
          ],
        },
        {
          content: 'Tech Stack: Java, Spring Boot, GitHub Actions, Docker, Nginx, MySQL',
          weight: 'LIGHT',
        },
      ],
    },
  ],
};

export default project;
