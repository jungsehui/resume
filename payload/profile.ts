import { faEnvelope, faBlog } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { IProfile } from '../component/profile/IProfile';
import image from '../asset/jungsehui-profile.jpg';

const profile: IProfile.Payload = {
  disable: false,

  image,
  name: {
    title: '정세희',
    small: '(Sehui Jung)',
  },
  contact: [
    {
      title: 'jsh1454619@gmail.com',
      link: 'mailto:jsh1454619@gmail.com',
      icon: faEnvelope,
    },
    {
      link: 'https://github.com/jungsehui',
      icon: faGithub,
    },
    {
      title: 'sehui-ing.tistory.com',
      link: 'https://sehui-ing.tistory.com/',
      icon: faBlog,
    },
    {
      link: 'https://www.linkedin.com/in/%EC%84%B8%ED%9D%AC-%EC%A0%95-647157331',
      icon: faLinkedin,
    },
  ],
  notice: {
    title: '',
  },
};

export default profile;
