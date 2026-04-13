import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Backend',
  items: [
    { title: 'Java 21', level: 3 },
    { title: 'Spring Boot 3.x', level: 3 },
    { title: 'JPA', level: 3 },
    { title: 'TypeScript', level: 2 },
    { title: 'NestJS', level: 2 },
    { title: 'Prisma', level: 2 },
    { title: 'GraphQL', level: 2 },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    { title: 'MySQL', level: 3 },
    { title: 'Redis', level: 3 },
    { title: 'Elasticsearch', level: 2 },
    { title: 'PostgreSQL', level: 1 },
  ],
};

const infraDevOps: ISkill.Skill = {
  category: 'Infra / DevOps',
  items: [
    { title: 'AWS (EB, CodePipeline, Lambda, RDS, S3, CloudWatch)', level: 2 },
    { title: 'Docker', level: 2 },
    { title: 'GitHub Actions', level: 2 },
    { title: 'Nginx', level: 2 },
  ],
};

const architecture: ISkill.Skill = {
  category: 'Architecture',
  items: [
    { title: 'Kafka / EDA', level: 2 },
    { title: 'Transactional Outbox', level: 2 },
    { title: 'Idempotency', level: 2 },
    { title: 'SSE + FCM Hybrid', level: 2 },
  ],
};

const test: ISkill.Skill = {
  category: 'Test',
  items: [
    { title: 'K6', level: 2 },
    { title: 'JUnit', level: 2 },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, database, infraDevOps, architecture, test],
  tooltip: '1: 학습/경험 수준\n2: 실무 사용 수준\n3: 주력 기술',
};

export default skill;
