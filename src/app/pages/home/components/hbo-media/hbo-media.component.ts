import { Component } from '@angular/core';

@Component({
  selector: 'hbo-media',
  templateUrl: './hbo-media.component.html',
  styleUrls: ['./hbo-media.component.css'],
})
export class HboMediaComponent {
  moviesOnView = [
    {
      title: 'Los gonies',
      image:
        'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1561060744-71nh8uhzn-l-sl1321-1561060691.jpg?crop=0.555xw:0.868xh;0.194xw,0.0650xh&resize=480:*',
    },
    {
      title: 'Avatar',
      image:
        'https://lumiere-a.akamaihd.net/v1/images/image_b88fdde2.jpeg?region=0,0,540,810&width=320',
    },
    {
      title: 'Elemental',
      image:
        'https://lumiere-a.akamaihd.net/v1/images/image_62e17a7e.jpeg?region=0,0,540,810&width=320',
    },
    {
      title: 'Guardianes de la galaxia',
      image:
        'https://lumiere-a.akamaihd.net/v1/images/image_2acce4a4.jpeg?region=0,0,540,810&width=320',
    },
    {
      title: 'El padrino',
      image:
        'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1561060643-41WMFqes1iL.jpg?crop=1xw:1xh;center,top&resize=480:*',
    },
    {
      title: 'Aladin',
      image:
        'https://lumiere-a.akamaihd.net/v1/images/image_9e35a739.jpeg?region=0,0,540,810&width=320',
    },
    {
      title: 'Ant-Man',
      image:
        'https://lumiere-a.akamaihd.net/v1/images/p_antmanandthewasp_es_d0615003.jpeg?region=0,0,540,810&width=320',
    },
    {
      title: 'BlackPanther',
      image:
        'https://lumiere-a.akamaihd.net/v1/images/p_blackpanther_19754_4ac13f07.jpeg?region=0,0,540,810&width=320',
    },
    {
      title: 'Quantumania',
      image:
        'https://lumiere-a.akamaihd.net/v1/images/image_16360f04.jpeg?region=0,0,540,810&width=320',
    },
  ];

  topMovies = [
    {
      title: 'Ant-Man',
      image:
        'https://lumiere-a.akamaihd.net/v1/images/p_antmanandthewasp_es_d0615003.jpeg?region=0,0,540,810&width=320',
    },
    {
      title: 'Quantumania',
      image:
        'https://lumiere-a.akamaihd.net/v1/images/image_16360f04.jpeg?region=0,0,540,810&width=320',
    },
    {
      title: 'Elemental',
      image:
        'https://lumiere-a.akamaihd.net/v1/images/image_62e17a7e.jpeg?region=0,0,540,810&width=320',
    },
    {
      title: 'BlackPanther',
      image:
        'https://lumiere-a.akamaihd.net/v1/images/p_blackpanther_19754_4ac13f07.jpeg?region=0,0,540,810&width=320',
    },
    {
      title: 'La sirenita',
      image:
        'https://lumiere-a.akamaihd.net/v1/images/image_be473c63.jpeg?region=0,0,540,810&width=320',
    },
    {
      title: 'Aladin',
      image:
        'https://lumiere-a.akamaihd.net/v1/images/image_9e35a739.jpeg?region=0,0,540,810&width=320',
    },
    {
      title: 'Avatar',
      image:
        'https://lumiere-a.akamaihd.net/v1/images/image_b88fdde2.jpeg?region=0,0,540,810&width=320',
    },
    {
      title: 'BlackPanther',
      image:
        'https://lumiere-a.akamaihd.net/v1/images/p_blackpanther_19754_4ac13f07.jpeg?region=0,0,540,810&width=320',
    },
    {
      title: 'Quantumania',
      image:
        'https://lumiere-a.akamaihd.net/v1/images/image_16360f04.jpeg?region=0,0,540,810&width=320',
    },
    {
      title: 'BlackPanther',
      image:
        'https://lumiere-a.akamaihd.net/v1/images/p_blackpanther_19754_4ac13f07.jpeg?region=0,0,540,810&width=320',
    },
    {
      title: 'La sirenita',
      image:
        'https://lumiere-a.akamaihd.net/v1/images/image_be473c63.jpeg?region=0,0,540,810&width=320',
    },
    {
      title: 'Aladin',
      image:
        'https://lumiere-a.akamaihd.net/v1/images/image_9e35a739.jpeg?region=0,0,540,810&width=320',
    },
    {
      title: 'Avatar',
      image:
        'https://lumiere-a.akamaihd.net/v1/images/image_b88fdde2.jpeg?region=0,0,540,810&width=320',
    },
    {
      title: 'BlackPanther',
      image:
        'https://lumiere-a.akamaihd.net/v1/images/p_blackpanther_19754_4ac13f07.jpeg?region=0,0,540,810&width=320',
    },
    {
      title: 'Quantumania',
      image:
        'https://lumiere-a.akamaihd.net/v1/images/image_16360f04.jpeg?region=0,0,540,810&width=320',
    },
  ];

  nextTopMovies = [
    {
      title: 'Akira',
      image:
        'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1657097430-41cCuwW7QZL._SL500_.jpg?crop=1xw:1xh;center,top&resize=480:*',
    },
    {
      title: 'Diamantes',
      image:
        'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1561060598-51DzlrlPFyL.jpg?crop=1xw:1xh;center,top&resize=480:*',
    },
    {
      title: 'Avatar',
      image:
        'https://lumiere-a.akamaihd.net/v1/images/image_b88fdde2.jpeg?region=0,0,540,810&width=320',
    },
    {
      title: 'End Game',
      image:
        'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1561060629-51ebhJXUZqL.jpg?crop=1xw:1xh;center,top&resize=480:*',
    },
    {
      title: 'Aladin',
      image:
        'https://lumiere-a.akamaihd.net/v1/images/image_9e35a739.jpeg?region=0,0,540,810&width=320',
    },
    {
      title: 'Los gonies',
      image:
        'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1561060744-71nh8uhzn-l-sl1321-1561060691.jpg?crop=0.555xw:0.868xh;0.194xw,0.0650xh&resize=480:*',
    },
    {
      title: 'El padrino',
      image:
        'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1561060643-41WMFqes1iL.jpg?crop=1xw:1xh;center,top&resize=480:*',
    },
    {
      title: 'Odsan',
      image:
        'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1561140659-51hNoMv2EHL.jpg?crop=1xw:1xh;center,top&resize=480:*',
    },
    {
      title: 'Aladin',
      image:
        'https://lumiere-a.akamaihd.net/v1/images/image_9e35a739.jpeg?region=0,0,540,810&width=320',
    },
    {
      title: 'Los gonies',
      image:
        'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1561060744-71nh8uhzn-l-sl1321-1561060691.jpg?crop=0.555xw:0.868xh;0.194xw,0.0650xh&resize=480:*',
    },
    {
      title: 'El padrino',
      image:
        'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1561060643-41WMFqes1iL.jpg?crop=1xw:1xh;center,top&resize=480:*',
    },
    {
      title: 'Odsan',
      image:
        'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1561140659-51hNoMv2EHL.jpg?crop=1xw:1xh;center,top&resize=480:*',
    },
  ];

  realHeroMovies = [
    {
      title: 'Pulp fiction',
      image:
        'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1657095733-51yHtvZGa5S._SL500_.jpg?crop=1xw:1xh;center,top&resize=480:*',
    },
    {
      title: 'Star Wars',
      image:
        'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1657095786-51Mo-7HacZS._SL500_.jpg?crop=1xw:1xh;center,top&resize=480:*',
    },
    {
      title: 'Reservoir Dogs',
      image:
        'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1657095919-51CQ-GIUyFL._SL500_.jpg?crop=1xw:1xh;center,top&resize=480:*',
    },
    {
      title: 'Charli chaplin',
      image:
        'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1561061614-51kts2QnwRL.jpg?crop=1xw:1xh;center,top&resize=480:*',
    },
    {
      title: 'BItelchis',
      image:
        'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1657095981-519761A-bAL._SL500_.jpg?crop=1xw:1xh;center,top&resize=480:*',
    },
    {
      title: 'Frankestein',
      image:
        'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1561060543-51EKGyAicLL.jpg?crop=0.783xw:0.880xh;0.111xw,0.0700xh&resize=480:*',
    },
    {
      title: 'Tiburon',
      image:
        'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1657096033-51zdou8OhWL._SL500_.jpg?crop=1xw:1xh;center,top&resize=480:*',
    },
    {
      title: 'Quantumania',
      image:
        'https://lumiere-a.akamaihd.net/v1/images/image_16360f04.jpeg?region=0,0,540,810&width=320',
    },
  ];

  featuredMovies = [
    {
      title: 'El exorcista',
      image:
        'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1561060789-513pgMJazCL.jpg?crop=1xw:1xh;center,top&resize=480:*',
    },
    {
      title: 'Logan',
      image:
        'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1561145535-logan-1561145522.jpg?crop=1xw:1xh;center,top&resize=480:*',
    },
    {
      title: 'Puro vicio',
      image:
        'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1561140801-51iVPBTjEgL.jpg?crop=1xw:1xh;center,top&resize=480:*',
    },
    {
      title: 'End Game',
      image:
        'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1561060629-51ebhJXUZqL.jpg?crop=1xw:1xh;center,top&resize=480:*',
    },
    {
      title: 'Aladin',
      image:
        'https://lumiere-a.akamaihd.net/v1/images/image_9e35a739.jpeg?region=0,0,540,810&width=320',
    },
    {
      title: 'Los gonies',
      image:
        'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1561060744-71nh8uhzn-l-sl1321-1561060691.jpg?crop=0.555xw:0.868xh;0.194xw,0.0650xh&resize=480:*',
    },
    {
      title: 'El padrino',
      image:
        'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1561060643-41WMFqes1iL.jpg?crop=1xw:1xh;center,top&resize=480:*',
    },
    {
      title: 'Odsan',
      image:
        'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1561140659-51hNoMv2EHL.jpg?crop=1xw:1xh;center,top&resize=480:*',
    },
  ];
}
