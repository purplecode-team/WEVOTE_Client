import React from 'react';
import PeopleIcon from '@material-ui/icons/People';
import DnsRoundedIcon from '@material-ui/icons/DnsRounded';
import PermMediaOutlinedIcon from '@material-ui/icons/PhotoSizeSelectActual';
import PublicIcon from '@material-ui/icons/Public';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';

export const Menu = [
  {
    id: 1,
    name: '공지사항 관리',
    icon: <PeopleIcon />,
    active: true,
    smallMenu: [],
  },
  {
    id: 2,
    name: '캘린더 관리',
    icon: <DnsRoundedIcon />,
    active: false,
    smallMenu: [],
  },
  {
    id: 3,
    name: '후보자 관리',
    icon: <PublicIcon />,
    active: false,
    smallMenu: [
      { id: 1, name: '세부 조직 등록', active: true },
      { id: 2, name: '중앙자치기구', active: false },
      { id: 3, name: '단과대', active: false },
      { id: 4, name: '학과', active: false },
    ],
  },
  {
    id: 4,
    name: '선거 안내 관리',
    icon: <SettingsEthernetIcon />,
    active: false,
    smallMenu: [],
  },
  {
    id: 5,
    name: '공약 게시판 관리',
    icon: <SettingsEthernetIcon />,
    active: false,
    smallMenu: [],
  },
];
