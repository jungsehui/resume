import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '안녕하세요, 매일 성장하는 백엔드 엔지니어 정세희입니다. 마주한 문제의 해결 과정을 블로그에 144편+ 기록하고 공유하며, 어제보다 나은 개발자로 거듭나기 위해 노력하고 있습니다. 정답이 없는 문제에서 최적의 답을 찾아가는 과정 자체를 즐기며, 동료들과의 깊이 있는 기술 논의를 통해 함께 성장하는 것에 큰 가치를 둡니다.',
    '현재 링커리어에서 TypeScript/NestJS 기반 GraphQL/Prisma 서비스를 운영하고 있으며, 개인적으로는 Java/Spring 기반 역량을 깊이 키우고 있습니다. 개인 프로젝트(SSA)에서는 1만 명 동시 접속 환경의 동시성 제어를 Redis 분산 락(16.29s) → Atomic Operation(0.73s)으로 12배 개선하고, Kafka 기반 이벤트 아키텍처와 트랜잭셔널 아웃박스 패턴으로 메시지 유실 0건을 달성했으며, 알림 발송 성능을 6.4s에서 0.27s로 23배 개선하는 등 분산 시스템 핵심 문제를 K6 부하 테스트 기반으로 해결해 왔습니다.',
    '기술 선택에서 가장 중요하게 생각하는 건 "왜 이게 맞는지"를 수치로 증명하는 것입니다. firebase-admin-sdk-java에 오픈소스 기여 경험도 있습니다.',
  ],
  sign: '정세희',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
