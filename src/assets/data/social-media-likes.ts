import shape1 from "../images/social-media-shape-1.svg";
import shape2 from "../images/social-media-shape-2.svg";
import shape3 from "../images/social-media-shape-3.svg";
import facebook from "../images/facebook.svg";
import google from "../images/google.svg";
import twitter from "../images/twitter.svg";

type SocialMediaLike = {
  id: number;
  icon: any;
  totalLikes: number;
  totalLikePercentage: number;
  target: number;
  duration: number;
  shape: any;
};

export const socialMediaLikes: SocialMediaLike[] = [
  {
    id: 1,
    icon: facebook,
    totalLikes: 12.281,
    totalLikePercentage: 7.2,
    target: 35.098,
    duration: 3.539,
    shape: shape1,
  },
  {
    id: 2,
    icon: google,
    totalLikes: 11.869,
    totalLikePercentage: 5.9,
    target: 34.732,
    duration: 2.965,
    shape: shape2,
  },
  {
    id: 3,
    icon: twitter,
    totalLikes: 12.623,
    totalLikePercentage: 6.2,
    target: 35.002,
    duration: 3.512,
    shape: shape3,
  },
];
