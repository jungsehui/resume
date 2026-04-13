import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '링커리어 (Linkareer)',
      positions: [
        {
          title: '백엔드 개발자 (신입)',
          startedAt: '2026-01',
          descriptions: [
            'NestJS / TypeScript / GraphQL / Prisma 기반 백엔드 개발',
            'Elasticsearch 동기화 버그 수정: 게시글 삭제/숨김 시 ES 색인 미동기화 — 3개 레포 크로스 분석으로 원인 파악 및 수정 PR 완료',
            '멀티레포 정적 분석 표준화: TSConfig/ESLint/Prettier 레포별 파편화 → 통합 설정 적용',
            'VS Code Extension 개발: IntelliJ ⌘B 기능을 VS Code Extension으로 직접 구현',
            'AWS 인프라 운용: EB, CodePipeline, Lambda, RDS, S3, CloudWatch',
          ],
          skillKeywords: ['NestJS', 'TypeScript', 'GraphQL', 'Prisma', 'AWS', 'Elasticsearch'],
        },
      ],
    },
  ],
};

export default experience;
