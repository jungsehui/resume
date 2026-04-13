import favicon from '../asset/favicon.ico';
import previewImage from '../asset/preview.jpg';
import { IGlobal } from '../component/common/IGlobal';

const title = '정세희 | 백엔드 엔지니어';
const description =
  '매일 성장하는 백엔드 엔지니어 정세희입니다. TypeScript/NestJS, Java/Spring 기반 백엔드 개발자입니다.';

export const _global: IGlobal.Payload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: previewImage,
          width: 800,
          height: 600,
          alt: '정세희 이력서',
        },
      ],
      type: 'profile',
      profile: {
        firstName: '세희',
        lastName: '정',
        username: 'jungsehui',
      },
    },
  },
};
