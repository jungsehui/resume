import { IOpenSource } from '../component/openSource/IOpenSource';

const openSource: IOpenSource.Payload = {
  disable: false,
  list: [
    {
      title: 'firebase-admin-sdk-java',
      descriptions: [
        {
          content: '한국어 로케일에서 RemoteConfig 테스트 실패 버그 수정',
        },
        {
          content: 'Issue #1196',
          href: 'https://github.com/firebase/firebase-admin-java/issues/1196',
        },
        {
          content: 'Pull Request #1199',
          href: 'https://github.com/firebase/firebase-admin-java/pull/1199',
        },
      ],
    },
  ],
};

export default openSource;
