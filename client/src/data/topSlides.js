import { AWARD_IMG, FEL_IMG, INDEPENDENCE_DAY_IMG, SPORTSDAY_IMG } from '../config'

export const TOP_SLIDES = [
  {
    id: 'sports-day',
    src: SPORTSDAY_IMG,
    alt: 'Sports Day at OSM Junior and Degree College — students and faculty with awards on the field',
    eager: true,
    fetchPriority: 'high',
  },
  {
    id: 'independence-day',
    src: INDEPENDENCE_DAY_IMG,
    alt: 'Independence Day celebration at OSM Degree College — Happy Independence Day, 15th August',
  },
  {
    id: 'future-ready-award',
    src: AWARD_IMG,
    alt: 'OSM Degree College receives the Future Ready Award from ET TECH X — College Code 2056',
  },
  {
    id: 'felicitation',
    src: FEL_IMG,
    alt: 'Felicitation ceremony at OSM Junior and Degree College',
  },
]
