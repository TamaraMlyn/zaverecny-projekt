import React, { useState } from 'react';
import { Button } from '../Button';
import magnifier from './img/magnifier.svg';
import clock from './img/clock.svg';
import { HashLink } from 'react-router-hash-link';
import './style.css';

export const LandingPage = () => {
  const [animationWheelchair, setAnimationWheelchair] = useState(false);
  const [animationVolunteer, setAnimationVolunteer] = useState(false);

  return (
    <div className="landing-page">
      <div className="first-section">
        <div className="intro container">
          <div className="intro__image">
            <svg
              width="500"
              height="500"
              viewBox="0 0 3710 3710"
              version="1.1"
              className={
                'image--main ' +
                (animationWheelchair ? 'animate-wheelchair' : '') +
                (animationVolunteer ? 'animate-volunteer' : '')
              }
            >
              <defs>
                <linearGradient
                  id="linear-gradient"
                  x1="11088.08"
                  y1="2964.61"
                  x2="11368.49"
                  y2="2964.61"
                  gradientTransform="translate(-8675.37 1069.22) rotate(-5.84)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#09005d" id="stop4" />
                  <stop offset="1" stopColor="#1a0f91" id="stop6" />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-2"
                  x1="11304.13"
                  y1="2425.36"
                  x2="11227.51"
                  y2="2954.75"
                  gradientTransform="translate(-8675.37 1069.22) rotate(-5.84)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#4f52ff" id="stop9" />
                  <stop offset="1" stopColor="#4042e2" id="stop11" />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-3"
                  x1="11102.08"
                  y1="2880.1"
                  x2="11177.95"
                  y2="2880.1"
                  gradientTransform="translate(-8675.37 1069.22) rotate(-5.84)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#febbba" id="stop14" />
                  <stop offset="1" stopColor="#ff928e" id="stop16" />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-4"
                  x1="3015.25"
                  y1="1867.72"
                  x2="2904.86"
                  y2="1998.18"
                  href="#linear-gradient-2"
                />
                <linearGradient
                  id="linear-gradient-5"
                  x1="11084.18"
                  y1="3021.82"
                  x2="11369.33"
                  y2="3021.82"
                  href="#linear-gradient"
                />
                <linearGradient
                  id="linear-gradient-6"
                  x1="2881.98"
                  y1="2746.16"
                  x2="3089.38"
                  y2="2351.43"
                  href="#linear-gradient-2"
                />
                <linearGradient
                  id="linear-gradient-7"
                  x1="11098.42"
                  y1="2935.89"
                  x2="11175.57"
                  y2="2935.89"
                  href="#linear-gradient-3"
                />
                <linearGradient
                  id="linear-gradient-8"
                  x1="-1889.56"
                  y1="2242.53"
                  x2="-1101.12"
                  y2="3014.71"
                  gradientTransform="matrix(-0.99,0.1,0.1,0.99,706.75,109.36)"
                  href="#linear-gradient-2"
                />
                <linearGradient
                  id="linear-gradient-9"
                  x1="-2499.25"
                  y1="903.99"
                  x2="-241.26"
                  y2="3114.07"
                  gradientTransform="matrix(-0.99,0.1,0.1,0.99,706.75,109.36)"
                  href="#linear-gradient"
                />
                <linearGradient
                  id="linear-gradient-10"
                  x1="-583.25"
                  y1="1423.99"
                  x2="-941.57"
                  y2="2295.35"
                  gradientTransform="matrix(-0.99,0.1,0.1,0.99,706.75,109.36)"
                  href="#linear-gradient"
                />
                <linearGradient
                  id="linear-gradient-11"
                  x1="-1761.12"
                  y1="3056.43"
                  x2="-1487.41"
                  y2="3056.43"
                  gradientTransform="matrix(-0.99,0.1,0.1,0.99,706.75,109.36)"
                  href="#linear-gradient"
                />
                <linearGradient
                  id="linear-gradient-12"
                  x1="3288.84"
                  y1="2269.59"
                  x2="2767"
                  y2="2436.84"
                  href="#linear-gradient"
                />
                <linearGradient
                  id="linear-gradient-13"
                  x1="-1602.93"
                  y1="2892.83"
                  x2="-1860.55"
                  y2="3364.26"
                  gradientTransform="matrix(-0.78,-0.63,-0.63,0.78,422.41886,577.07749)"
                  href="#linear-gradient"
                />
                <linearGradient
                  id="linear-gradient-14"
                  x1="-1635.14"
                  y1="2951.76"
                  x2="-1832.78"
                  y2="3313.42"
                  gradientTransform="matrix(-0.78,-0.63,-0.63,0.78,422.41886,577.07749)"
                  href="#linear-gradient-2"
                />
                <linearGradient
                  id="linear-gradient-15"
                  x1="10238.15"
                  y1="1521.88"
                  x2="10459.35"
                  y2="1521.88"
                  gradientTransform="rotate(-24.5,6044.8886,20882.964)"
                  href="#linear-gradient-3"
                />
                <linearGradient
                  id="linear-gradient-16"
                  x1="16154.89"
                  y1="12151.84"
                  x2="15885.3"
                  y2="12508.49"
                  gradientTransform="rotate(-23.94,-16702.636,39986.832)"
                  href="#linear-gradient-3"
                />
                <linearGradient
                  id="linear-gradient-17"
                  x1="15815.94"
                  y1="12440.23"
                  x2="16005.35"
                  y2="12245.89"
                  gradientTransform="rotate(-23.94,-16702.636,39986.832)"
                  href="#linear-gradient-3"
                />
                <linearGradient
                  id="linear-gradient-18"
                  x1="8764.69"
                  y1="1285.79"
                  x2="8961.41"
                  y2="1285.79"
                  gradientTransform="rotate(4.17,-7149.6052,-84504.83)"
                  href="#linear-gradient-3"
                />
                <linearGradient
                  id="linear-gradient-19"
                  x1="2557.03"
                  y1="1406.89"
                  x2="2336.26"
                  y2="1694.57"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#ff928e" id="stop34" />
                  <stop offset="1" stopColor="#fe7062" id="stop36" />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-20"
                  x1="-1668.97"
                  y1="2707.61"
                  x2="-583.29"
                  y2="2707.61"
                  gradientTransform="matrix(-0.99,0.1,0.1,0.99,706.75,109.36)"
                  href="#linear-gradient"
                />
                <linearGradient
                  id="linear-gradient-21"
                  x1="1752.22"
                  y1="2381.28"
                  x2="4429.67"
                  y2="2944.29"
                  gradientTransform="matrix(-0.95,-0.32,-0.32,0.95,5338.92,1112.9)"
                  href="#linear-gradient-2"
                />
                <linearGradient
                  id="linear-gradient-22"
                  x1="1298.08"
                  y1="362.56"
                  x2="-29.88"
                  y2="1400.72"
                  gradientTransform="matrix(-1,0,0,1,1426.33,0)"
                  href="#linear-gradient-2"
                />
                <linearGradient
                  id="linear-gradient-23"
                  x1="-2468.06"
                  y1="2637.05"
                  x2="-2538.96"
                  y2="2857.21"
                  gradientTransform="translate(3806.98)"
                  href="#linear-gradient"
                />
                <linearGradient
                  id="linear-gradient-24"
                  x1="-2749.69"
                  y1="3011.81"
                  x2="-2661.97"
                  y2="3011.81"
                  gradientTransform="translate(3806.98)"
                  href="#linear-gradient-3"
                />
                <linearGradient
                  id="linear-gradient-25"
                  x1="-3032.04"
                  y1="2455.43"
                  x2="-3102.94"
                  y2="2675.59"
                  gradientTransform="translate(3806.98)"
                  href="#linear-gradient"
                />
                <linearGradient
                  id="linear-gradient-26"
                  x1="-3242.38"
                  y1="2966.06"
                  x2="-3137.54"
                  y2="2966.06"
                  gradientTransform="translate(3806.98)"
                  href="#linear-gradient-3"
                />
                <linearGradient
                  id="linear-gradient-27"
                  x1="1122.08"
                  y1="2282.93"
                  x2="1409.76"
                  y2="1640.67"
                  href="#linear-gradient-2"
                />
                <linearGradient
                  id="linear-gradient-28"
                  x1="622.28"
                  y1="537.44"
                  x2="230.92"
                  y2="2112.91"
                  gradientTransform="matrix(-1,0,0,1,1426.33,0)"
                  href="#linear-gradient-2"
                />
                <linearGradient
                  id="linear-gradient-29"
                  x1="-2725.9"
                  y1="1106.92"
                  x2="-2680.47"
                  y2="868.44"
                  gradientTransform="translate(3806.98)"
                  href="#linear-gradient-3"
                />
                <linearGradient
                  id="linear-gradient-30"
                  x1="-2602.98"
                  y1="669.39"
                  x2="-2862.16"
                  y2="867.69"
                  gradientTransform="translate(3806.98)"
                  href="#linear-gradient-3"
                />
                <linearGradient
                  id="linear-gradient-31"
                  x1="-2785.43"
                  y1="512.37"
                  x2="-2544.05"
                  y2="823.15"
                  gradientTransform="translate(3806.98)"
                  href="#linear-gradient"
                />
                <linearGradient
                  id="linear-gradient-32"
                  x1="-2635.13"
                  y1="627.37"
                  x2="-2894.31"
                  y2="825.68"
                  gradientTransform="translate(3806.98)"
                  href="#linear-gradient-3"
                />
                <linearGradient
                  id="linear-gradient-33"
                  x1="1197.04"
                  y1="1293.82"
                  x2="1554.97"
                  y2="1009.49"
                  href="#linear-gradient-2"
                />
                <linearGradient
                  id="linear-gradient-34"
                  x1="912.02"
                  y1="625.52"
                  x2="718"
                  y2="1238.82"
                  gradientTransform="matrix(-0.97,0.26,0.26,0.97,1939.94,268.89)"
                  href="#linear-gradient-3"
                />
                <linearGradient
                  id="linear-gradient-35"
                  x1="-4425.77"
                  y1="-3334.14"
                  x2="-4567.24"
                  y2="-3121.94"
                  gradientTransform="matrix(-0.05,-1,1,-0.05,4442.2,-3031.13)"
                  href="#linear-gradient-3"
                />
                <linearGradient
                  href="#linear-gradient"
                  id="linearGradient1027"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="rotate(-5.84,6143.2647,85574.28)"
                  x1="11088.08"
                  y1="2964.61"
                  x2="11368.49"
                  y2="2964.61"
                />
                <linearGradient
                  href="#linear-gradient-2"
                  id="linearGradient1029"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="rotate(-5.84,6143.2647,85574.28)"
                  x1="11304.13"
                  y1="2425.36"
                  x2="11227.51"
                  y2="2954.75"
                />
                <linearGradient
                  href="#linear-gradient-3"
                  id="linearGradient1031"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="rotate(-5.84,6143.2647,85574.28)"
                  x1="11102.08"
                  y1="2880.1"
                  x2="11177.95"
                  y2="2880.1"
                />
              </defs>
              <rect
                style={{ fill: '#ffffff' }}
                y="0"
                x="0"
                height="3710"
                width="3710"
                className="cls-1"
              />
              <path
                style={{ fill: '#bdd0fb' }}
                d="m 2705.73,1400.66 c -18.35,-53.91 -29.46,-109.36 -26.58,-168 7.26,-147.62 108.51,-272.22 186.14,-390.77 71.34,-109 134.73,-276.44 -61,-284.31 -155.92,-6.28 -356,125.89 -395.91,283.91 -47.28,187 16.49,437.67 -113.84,597.09 -182.33,223 -286.34,154.44 -335.17,561.81 -20.86,174.07 64,281.64 168.15,347.77 A 465.48,465.48 0 0 0 2658.71,2326 c 136.92,-104 230.33,-266 226.2,-440.31 -4.18,-176.07 -124.2,-323.6 -179.18,-485.03 z"
                className="cls-2"
              />
              <path
                style={{ fill: '#91b3fa' }}
                d="m 2420,2694.49 h 0.46 a 5,5 0 0 0 4.35,-5.61 c -113.26,-892.67 -1.29,-1402.51 112.58,-1673 122.94,-292.07 273.78,-374.63 275.29,-375.43 a 5.0191359,5.0191359 0 0 0 -4.7,-8.87 c -1.54,0.82 -155.52,85.08 -279.84,380.41 -72.81,173 -121.56,383.67 -144.9,626.25 -29.14,303 -18.51,656.89 31.61,1051.92 a 5,5 0 0 0 5.15,4.33 z"
                className="cls-3"
              />
              <path
                style={{ fill: '#bdd0fb' }}
                d="m 2911.11,989.65 a 65.12,65.12 0 0 0 -24.21,-4.58 c -49,-0.23 -74.93,48.34 -93.91,86.48 -16.24,32.66 -35.53,72.35 -32.78,110.18 3,40.89 41.5,78.57 77.16,41.69 40.53,-41.93 101.54,-106.44 109.18,-167.51 3.8,-30.36 -10.41,-56.14 -35.44,-66.26 z"
                className="cls-2"
              />
              <path
                style={{ fill: '#bdd0fb' }}
                d="m 3171.73,2148.32 c 35.36,-127.83 6,-283 -1.16,-423.5 -3.76,-74.29 -0.88,-147.23 19.6,-219.17 20.37,-71.52 64.08,-146.28 41.2,-222.72 -46.12,-154 -205.42,-105.52 -305.31,-5.72 -115.91,115.79 -168.45,321.44 -225.94,477.79 -34.66,94.23 -81.28,189.56 -105.27,286.94 -39.75,161.32 -16.36,279.43 52.77,365.58 a 238.71,238.71 0 0 0 276.91,71.45 c 88.56,-36.33 190.14,-124.43 247.2,-330.65 z"
                className="cls-2"
              />
              <path
                style={{ fill: '#91b3fa' }}
                d="m 2753.92,2710.94 v 0 a 5,5 0 0 0 4.79,-5.25 c -0.09,-2 -9.16,-203.82 22.75,-477.15 29.42,-252.11 100.71,-618.35 273.24,-931.47 a 5.0172129,5.0172129 0 0 0 -8.79,-4.84 c -173.34,314.6 -244.92,682.29 -274.44,935.34 -32,274.1 -22.88,476.58 -22.78,478.59 a 5,5 0 0 0 5.23,4.78 z"
                className="cls-3"
              />
              <path
                style={{ fill: '#91b3fa' }}
                d="m 1959,1742.83 h 789 l -70,775.45 a 39.7,39.7 0 0 1 -39.54,36.13 H 1959 Z"
                className="cls-3"
              />
              <path
                style={{ fill: '#7d97f4' }}
                d="m 2229.54,2554.41 h 315.62 l 36,-395.75 a 35,35 0 0 0 -34.9,-38.22 h -302.34 a 35,35 0 0 0 -35,36.87 z"
                className="cls-4"
              />
              <path
                style={{ fill: '#7d97f4' }}
                d="m 2009.74,1782.29 h 746.43 a 29.26,29.26 0 0 0 27.31,-39.77 l -5.67,-14.75 A 29.27,29.27 0 0 0 2750.5,1709 h -740.76 z"
                className="cls-4"
              />
              <rect
                style={{ fill: '#7d97f4' }}
                height="129.63"
                width="84.540001"
                y="1855.55"
                x="2404.26"
                className="cls-4"
              />
              <rect
                style={{ fill: '#7d97f4' }}
                height="129.63"
                width="84.540001"
                y="1855.55"
                x="2246.45"
                className="cls-4"
              />
              <rect
                style={{ fill: '#7d97f4' }}
                height="129.63"
                width="84.540001"
                y="1855.55"
                x="2562.0601"
                className="cls-4"
              />
              <polygon
                style={{ fill: '#7d97f4' }}
                points="561.31,2554.41 493.68,886.17 2223.91,886.17 2129.66,2554.41 "
                className="cls-4"
              />
              <path
                style={{ fill: '#91b3fa' }}
                d="m 487.72,920 h 1744.45 a 19.33,19.33 0 0 0 18.48,-13.65 l 10.65,-34.6 a 19.34,19.34 0 0 0 -18.48,-25 H 482.4 A 19.33,19.33 0 0 0 463.29,869 l 5.32,34.6 a 19.33,19.33 0 0 0 19.11,16.4 z"
                className="cls-3"
              />
              <polygon
                style={{ fill: '#bdd0fb' }}
                points="2216.27,1021.43 2202.89,1258.14 508.76,1258.14 499.16,1021.43 "
                className="cls-2"
              />
              <rect
                style={{ fill: '#7d97f4' }}
                height="236.71001"
                width="39.450001"
                y="1021.43"
                x="1987.2"
                className="cls-4"
              />
              <rect
                style={{ fill: '#7d97f4' }}
                height="236.71001"
                width="39.450001"
                y="1021.43"
                x="1716.67"
                className="cls-4"
              />
              <rect
                style={{ fill: '#7d97f4' }}
                height="236.71001"
                width="39.450001"
                y="1021.43"
                x="1446.15"
                className="cls-4"
              />
              <rect
                style={{ fill: '#7d97f4' }}
                height="236.71001"
                width="39.450001"
                y="1021.43"
                x="1175.63"
                className="cls-4"
              />
              <rect
                style={{ fill: '#7d97f4' }}
                height="236.71001"
                width="39.450001"
                y="1021.43"
                x="905.09998"
                className="cls-4"
              />
              <rect
                style={{ fill: '#7d97f4' }}
                height="236.71001"
                width="39.450001"
                y="1021.43"
                x="634.58002"
                className="cls-4"
              />
              <rect
                style={{ fill: '#91b3fa' }}
                transform="scale(-1)"
                height="174.71001"
                width="406.07999"
                y="-1528.67"
                x="-2009.74"
                className="cls-3"
              />
              <rect
                style={{ fill: '#bdd0fb' }}
                height="146.53"
                width="376"
                y="1370.86"
                x="1618.7"
                className="cls-2"
              />
              <rect
                style={{ fill: '#91b3fa' }}
                transform="scale(-1)"
                height="174.71001"
                width="406.07999"
                y="-1528.67"
                x="-1566.0601"
                className="cls-3"
              />
              <rect
                style={{ fill: '#bdd0fb' }}
                height="146.53"
                width="376"
                y="1370.86"
                x="1175.02"
                className="cls-2"
              />
              <rect
                style={{ fill: '#91b3fa' }}
                transform="scale(-1)"
                height="174.71001"
                width="406.07999"
                y="-1528.67"
                x="-1122.37"
                className="cls-3"
              />
              <rect
                style={{ fill: '#bdd0fb' }}
                height="146.53"
                width="376"
                y="1370.86"
                x="731.34003"
                className="cls-2"
              />
              <rect
                style={{ fill: '#bdd0fb' }}
                height="659.40002"
                width="766.48999"
                y="1934.46"
                x="1158.72"
                className="cls-2"
              />
              <path
                style={{ fill: '#91b3fa' }}
                d="M 1976.24,2593.86 H 1846.3 v -681.95 l 140.9,0 v 671 a 11,11 0 0 1 -10.96,10.95 z"
                className="cls-3"
              />
              <rect
                style={{ fill: '#7d97f4' }}
                height="456.51001"
                width="495.95999"
                y="2137.3501"
                x="1293.98"
                className="cls-4"
              />
              <path
                style={{ fill: '#91b3fa' }}
                d="m 2046.86,1641.65 -20.21,343.53 h -789 v 608.68 h -514 A 51.68,51.68 0 0 1 672,2544.27 L 636.12,1657 a 37.05,37.05 0 0 1 36.59,-38.56 l 1336.71,-16 a 37.06,37.06 0 0 1 37.44,39.21 z"
                className="cls-3"
              />
              <polygon
                style={{ fill: '#7d97f4' }}
                points="1158.72,1742.83 2040.91,1742.83 2033.28,1872.46 1158.72,1872.46 "
                className="cls-4"
              />
              <rect
                style={{ fill: '#91b3fa' }}
                transform="scale(-1)"
                height="129.63"
                width="33.82"
                y="-1872.4701"
                x="-1902.67"
                className="cls-3"
              />
              <rect
                style={{ fill: '#91b3fa' }}
                transform="scale(-1)"
                height="129.63"
                width="33.82"
                y="-1872.4701"
                x="-1750.5"
                className="cls-3"
              />
              <rect
                style={{ fill: '#91b3fa' }}
                transform="scale(-1)"
                height="129.63"
                width="33.82"
                y="-1872.4701"
                x="-1598.3199"
                className="cls-3"
              />
              <rect
                style={{ fill: '#91b3fa' }}
                transform="scale(-1)"
                height="129.63"
                width="33.82"
                y="-1872.4701"
                x="-1446.15"
                className="cls-3"
              />
              <rect
                style={{ fill: '#91b3fa' }}
                transform="scale(-1)"
                height="129.63"
                width="33.82"
                y="-1872.4701"
                x="-1293.98"
                className="cls-3"
              />
              <g className="wheelchair">
                <path d="m 1786.58,2315.66 -91.91,-619.74 c 94.39,-192.79 162.28,81 171.5,611.6 z" />
                <path d="m 1772.55,2457.51 12.13,-1.24 814.68,-83.27 c 33.4,-78.64 -41.25,-135.67 -242.83,-157.29 l -564,49.92 z" />
                <path
                  style={{ fill: 'url(#linearGradient1027)' }}
                  d="m 2768.85,2880.45 c -68.39,7 -99.25,4.22 -113.32,0.25 a 26.07,26.07 0 0 0 27.32,17.52 l 241.93,-24.74 a 11.84,11.84 0 0 0 9.83,-16 c -27.35,5.01 -85.54,14.77 -165.76,22.97 z"
                  className="cls-5"
                />
                <path
                  style={{ fill: 'url(#linearGradient1029)' }}
                  d="m 2934.61,2857.46 a 11.41,11.41 0 0 0 -2.41,-3.92 c -20.83,-21.64 -61.63,-54.81 -111.91,-48.95 -73.67,8.58 -98.57,19.22 -156.78,16.49 l -8.94,46.21 a 25.8,25.8 0 0 0 1,13.41 c 14.07,4 44.93,6.74 113.32,-0.25 80.18,-8.2 138.37,-17.96 165.72,-22.99 z"
                  className="cls-6"
                />
                <path
                  style={{ fill: 'url(#linearGradient1031)' }}
                  d="m 2675.17,2771.07 -10.83,58.16 c 0,0 38.49,13 69.47,-3.77 l 1.34,-49.56 z"
                  className="cls-7"
                />
                <path
                  style={{ fill: 'url(#linear-gradient-4)' }}
                  d="m 2254.25,2164.11 c 0,0 412.86,-8.44 500.89,22.51 88.03,30.95 -7.83,600.71 -7.83,600.71 0,0 -21.74,13.34 -74.23,2.73 0,0 10.35,-414.29 -37.54,-499 l -450.73,-27.18 z"
                  className="cls-8"
                />
                <path
                  style={{ fill: 'url(#linear-gradient-5)' }}
                  d="m 2772.68,2937.59 c -69.54,7.11 -100.92,4.3 -115.23,0.26 a 26.52,26.52 0 0 0 27.79,17.81 l 246,-25.16 a 12,12 0 0 0 10,-16.29 c -27.81,5.12 -86.98,15.04 -168.56,23.38 z"
                  className="cls-9"
                />
                <path
                  style={{ fill: 'url(#linear-gradient-6)' }}
                  d="m 2941.24,2914.21 a 11.59,11.59 0 0 0 -2.44,-4 c -21.19,-22 -62.67,-55.74 -113.81,-49.78 -74.91,8.73 -100.23,19.54 -159.42,16.77 l -9.09,47 a 26.25,26.25 0 0 0 1,13.64 c 14.31,4 45.69,6.85 115.23,-0.26 81.55,-8.33 140.72,-18.25 168.53,-23.37 z"
                  className="cls-10"
                />
                <path
                  style={{ fill: 'url(#linear-gradient-7)' }}
                  d="m 2677.42,2826.37 -11,59.14 c 0,0 39.14,13.2 70.64,-3.83 l 1.37,-50.41 z"
                  className="cls-11"
                />
                <path
                  style={{ fill: 'url(#linear-gradient-8)' }}
                  d="m 2249.4,2209.15 c 0,0 419.82,-8.58 509.35,22.89 89.53,31.47 -8,610.86 -8,610.86 0,0 -22.11,13.57 -75.5,2.77 0,0 -27.19,-386.19 -75.9,-472.33 l -420.61,-62.72 z"
                  className="cls-12"
                />
                <path
                  style={{ fill: 'url(#linear-gradient-9)' }}
                  d="m 1766.67,2254.53 650.09,-62.5 -0.2,-1.92 a 59.09,59.09 0 0 0 -62.88,-52.94 l -567.09,39.31 a 35,35 0 0 0 -30.71,46.05 z"
                  className="cls-13"
                />
                <path
                  style={{ fill: 'url(#linear-gradient-10)' }}
                  d="m 1440,1606.75 c 221.8,-89.41 299.32,-6.31 306.44,259.4 l 51.49,503.52 -57.08,5.83 -60.92,-595.71 c -18.23,-129.25 -64.92,-162.87 -211,-99.74 -48.05,11.04 -79.93,-51.75 -28.93,-73.3 z"
                  className="cls-14"
                />
                <path
                  style={{ fill: 'url(#linear-gradient-11)' }}
                  d="M 2502.65,3021.84 2769,2994.6 a 3,3 0 0 0 2.67,-3.28 l -4.2,-41.06 a 3,3 0 0 0 -3.28,-2.67 l -266.33,27.23 a 3,3 0 0 0 -2.68,3.29 l 4.2,41 a 3,3 0 0 0 3.27,2.73 z"
                  className="cls-15"
                />
                <path
                  style={{ fill: 'url(#linear-gradient-12)' }}
                  d="m 1801.42,2243.56 800.07,91.55 a 128.12,128.12 0 0 1 112.65,112.1 l 58.56,490.56 -57.79,5.91 -87,-471.12 -834.9,-0.41 z"
                  className="cls-16"
                />
                <circle
                  style={{ fill: 'url(#linear-gradient-13)' }}
                  transform="rotate(-45)"
                  r="133.67"
                  cy="4115.8677"
                  cx="-214.22125"
                  className="cls-17"
                />
                <circle
                  style={{ opacity: 0.56, fill: 'url(#linear-gradient-14)' }}
                  transform="rotate(-45)"
                  r="102.55"
                  cy="4115.8677"
                  cx="-214.22125"
                  className="cls-18"
                />
                <path
                  style={{ fill: '#ffffff' }}
                  d="m 1992.44,1126.77 a 127.07,127.07 0 0 1 21,1 c 7.39,0.93 15.09,2.45 20.85,7.18 3.26,2.67 5.69,6.2 8.73,9.12 15.78,15.14 40.92,11.48 57.65,26.55 14.52,13.08 21.29,33.35 12.73,51.69 a 124.83,124.83 0 0 1 -38.41,47.1 c 1,-8.59 1.07,-17.48 -1.57,-25.73 -7.5,-23.43 -45.1,-38.74 -67.14,-43.19 -23.5,-4.75 -58.65,8.14 -79.46,18.54 -11,5.47 -17.58,12.34 -25.11,21.52 -2.94,3.58 -19.68,22.23 -16.33,27.38 a 69,69 0 0 1 25.66,-98.68 c 7.24,-3.82 15.18,-6.37 21.89,-11.07 7.34,-5.16 12.78,-12.6 19.77,-18.22 11.18,-8.96 25.3,-12.59 39.74,-13.19 z"
                  className="cls-1"
                />
                <path
                  style={{ fill: 'url(#linear-gradient-15)' }}
                  d="m 1951.8,1362.44 c 0,0 -74.16,138.13 -103.4,199.53 l 122.84,10 c 0,0 25.07,-85.26 63.88,-133.71 z"
                  className="cls-19"
                />
                <path
                  style={{ fill: 'url(#linear-gradient-16)' }}
                  d="m 2093.84,1228.77 c 5.18,20.11 5.75,43.46 7.68,68.38 q 5.43,70.17 10.53,140.34 l -118.05,6.13 c -11,-49 -21,-98.19 -32.1,-147.15 -5.92,-26.06 -9.1,-61 -33,-77.7 -13.91,-9.76 -32.49,-6.23 -20.35,-25.55 8.91,-14.17 32.81,-23.38 48.12,-27.23 24.86,-6.26 51.32,-4 76,3.09 38.71,11.2 54.16,32.48 61.17,59.69 z"
                  className="cls-20"
                />
                <path
                  style={{ fill: '#ffffff' }}
                  d="m 1990.68,1286.33 c -2.52,9 -0.26,19.36 1.69,33 q 5,35 10,69.89 a 14.59,14.59 0 0 0 1.09,3.83 c 3.33,7.51 16.66,32.54 41.43,17.34 22.48,-13.8 43.2,-26.05 60,-25.67 a 14.6,14.6 0 0 1 14.26,13.54 c 1.37,18.76 3.67,61.08 0.06,98.15 a 14.58,14.58 0 0 1 -14.71,13.1 c -22.77,-0.21 -70.79,-2 -109.09,-12.49 a 14.63,14.63 0 0 1 -10.43,-10.74 q -7.18,-30.4 -14.9,-60.7 c -2.11,-8.22 -1.64,-19.46 -7.3,-25.92 -6.31,-7.2 -17.84,-10.18 -26.92,-7.73 -4.23,1.14 -8.13,3.27 -12.35,4.4 a 27.8,27.8 0 0 1 -29.06,-10.5 c -7.64,-10.77 -7.6,-27.11 -18.75,-34.17 -6.26,-4 -14,-1.93 -20.48,-5.48 -5.75,-3.15 -9.38,-9 -11.65,-14.93 -4.3,-11.32 -4.57,-26.5 1.35,-37.32 11.24,-20.55 37.71,-19.27 23.88,-46.74 -7,-13.86 0.57,-31.48 12.9,-40.91 30.72,-23.49 90.79,-35.93 116.9,0.23 1,1.43 2.17,3 3.9,3.4 1.73,0.4 3.29,-0.54 4.85,-1.23 9.31,-4.15 21.18,-0.71 27.36,7.4 6.18,8.11 6.52,20 1.42,28.82 -5.83,10.09 -17.11,15.43 -27.18,21.32 -11.03,6.44 -16.22,12.78 -18.27,20.11 z"
                  className="cls-1"
                />
                <path
                  style={{ fill: 'url(#linear-gradient-17)' }}
                  d="m 1963.59,1400.79 c 0,0 -1.68,-63.66 -26.62,-71.77 -24.94,-8.11 -54,7.93 -35.49,47.47 23.04,49.19 62.11,24.3 62.11,24.3 z"
                  className="cls-21"
                />
                <path
                  style={{ fill: 'url(#linear-gradient-18)' }}
                  d="m 2484.49,2217.91 27.57,-5.24 83.52,-13 a 38.19,38.19 0 0 1 28.52,7 l 53.23,39.17 a 5,5 0 0 1 -3.36,9.1 l -177.49,-13.24 z"
                  className="cls-22"
                />
                <path
                  style={{ fill: 'url(#linear-gradient-19)' }}
                  d="m 1904.88,2301.74 c 0,0 134.12,-23.34 213.17,-125.74 0,0 -33.69,-262.25 -19.76,-354.62 0,0 275,537.37 414.1,421.49 l 10.92,-31.92 c -63.81,8 -302.58,-449 -335,-531.07 -35,-88.32 -188.23,-136.77 -252.39,-131.6 -40,3.22 -65,3.68 -78.27,3.57 a 17.16,17.16 0 0 0 -16.27,11.13 c -23.56,62.46 -121.6,364.79 63.5,738.76 z"
                  className="cls-23"
                />
                <circle
                  style={{ fill: 'url(#linear-gradient-20)' }}
                  r="542.83002"
                  cy="2688.3601"
                  cx="2102.3799"
                  className="cls-24"
                />
                <circle
                  style={{ opacity: 0.56, fill: 'url(#linear-gradient-21)' }}
                  r="465.01999"
                  cy="2698.52"
                  cx="2094.1101"
                  className="cls-25"
                />
              </g>
              <g className="volunteer">
                <path
                  style={{ fill: 'url(#linear-gradient-32)' }}
                  d="m 1072.76,733.58 c 0,0 -17.3,-66.53 -47.12,-47.88 -29.82,18.65 15.48,74.54 39.46,77 z"
                  className="cls-36"
                />
                <path
                  style={{ fill: 'url(#linear-gradient-22)' }}
                  d="m 1335.33,997.74 c 55.09,102.27 149.88,517.39 145.34,593.17 l -120.42,43.27 z"
                  className="cls-26"
                />
                <path
                  className="cls-4"
                  d="m 1331.16,3143 c -53.35,4.61 -145.94,12.11 -218.94,15.32 -43.88,1.93 -69.14,-2.37 -83.69,-8.19 0,1.64 0.07,3.19 0.14,4.63 A 15.1,15.1 0 0 0 1043,3169 c 137.93,7.7 247.63,2.66 286.68,0.28 a 10.75,10.75 0 0 0 8.76,-16.15 88.87,88.87 0 0 0 -7.28,-10.13 z"
                  style={{ fill: '#7d97f4' }}
                />
                <path
                  className="cls-27"
                  d="m 1112.22,3158.31 c 73,-3.21 165.59,-10.71 218.94,-15.32 -52.45,-64.35 -218.94,-107.73 -218.94,-107.73 h -47 c -32.34,46.62 -37,91 -36.67,114.86 14.53,5.82 39.79,10.12 83.67,8.19 z"
                  style={{ fill: 'url(#linear-gradient-23)' }}
                />
                <path
                  className="cls-28"
                  d="m 1057.29,2958.5 4.4,87.08 a 19.88,19.88 0 0 0 17,18.7 77.46,77.46 0 0 0 35.33,-2.93 23.53,23.53 0 0 0 15.81,-18.08 L 1145,2958.5 Z"
                  style={{ fill: 'url(#linear-gradient-24)' }}
                />
                <path
                  className="cls-4"
                  d="m 511.54,3217.84 c -23.13,-3.75 -33.6,-17.75 -38,-32.71 l -0.09,0.41 c -3.4,15.78 4.49,32.13 20.27,39.91 19.06,9.4 39.91,11 56.1,10.22 17.36,-0.83 33.3,-9.2 42.06,-22.58 l 0.14,-0.21 c -17.42,10.05 -41.89,11.23 -80.48,4.96 z"
                  style={{ fill: '#7d97f4' }}
                />
                <path
                  className="cls-29"
                  d="m 620.63,2985.33 h -38.78 c -59.07,-1.41 -96.16,143.64 -108.3,199.8 4.39,15 14.86,29 38,32.71 38.59,6.27 63.06,5.09 80.49,-5 31.91,-48.88 47.73,-120.49 55.33,-162.27 8.63,-47.49 -26.74,-65.24 -26.74,-65.24 z"
                  style={{ fill: 'url(#linear-gradient-25)' }}
                />
                <path
                  className="cls-30"
                  d="m 586.83,2904.51 -21.53,85.64 a 23.25,23.25 0 0 0 12.09,26.34 c 12.05,6.18 29,12.68 44.6,10.8 a 19.42,19.42 0 0 0 15.84,-12.95 l 31.61,-90.1 z"
                  style={{ fill: 'url(#linear-gradient-26)' }}
                />
                <path
                  className="cls-31"
                  d="m 1344.3,1776.55 c 0,0 -192.43,1202.83 -189.3,1209.45 0,0 -53.14,24.15 -111.08,3.08 0,0 17.4,-643 58.17,-889.54 0,0 -328.4,574.71 -432.69,861.08 0,0 -54.39,-6.49 -99.42,-36.12 0,0 353.6,-1034.45 447.94,-1172.24 z"
                  style={{ fill: 'url(#linear-gradient-27)' }}
                />
                <path
                  className="cls-32"
                  d="m 1335.33,997.74 c -32.37,-67.88 -245.3,-84.92 -450,-17.29 -43.09,14.23 -47.45,80.87 -58.06,124.62 -17.9,73.78 55.75,177.4 107.33,142.91 51.87,140 63.76,339.79 68.84,430.22 1.68,29.77 -24,57.25 -35.68,84.74 l -169.48,439.8 c -2.52,37.16 475.6,134.07 483.92,93.4 C 1405.64,1693 1384.07,1100 1335.33,997.74 Z"
                  style={{ fill: 'url(#linear-gradient-28)' }}
                />
                <path
                  className="cls-33"
                  d="m 1058.1,769.45 c 0,0 -14.18,149.87 -26.66,194.2 a 15.16,15.16 0 0 0 7.14,17.31 c 21.18,12.1 72,31.85 141.48,-2.21 a 31.51,31.51 0 0 0 17.5,-29.67 l -6.12,-144.83 z"
                  style={{ fill: 'url(#linear-gradient-29)' }}
                />
                <path
                  className="cls-34"
                  d="m 1194.49,577.71 c 0,0 45.34,104.15 48.38,158.81 3.04,54.66 14.83,90.14 -48.38,101.14 -63.21,11 -116.49,-20.48 -145.29,-74.93 0,0 -45.2,-83.9 -35.06,-118.26 10.14,-34.36 180.35,-66.76 180.35,-66.76 z"
                  style={{ fill: 'url(#linear-gradient-30)' }}
                />
                <path
                  className="cls-35"
                  d="m 1070.8,723.58 3.59,-1.58 a 8.67,8.67 0 0 0 4.24,-11.92 c -8.91,-17.22 -26.28,-56.68 -3.84,-65.89 28.93,-11.86 143.51,-35.19 168.21,-75.89 23.76,-39.07 2.7,-89.51 -28.94,-103.86 a 4.34,4.34 0 0 0 -5.69,1.86 l -2.64,5 a 4.29,4.29 0 0 1 -7.92,-0.82 v 0 a 4.28,4.28 0 0 0 -7.74,-1.1 c -7.6,12.16 -28.11,31.88 -83,42 -78,14.4 -129.52,46 -130.81,99.83 a 4.31,4.31 0 0 1 -6.65,3.55 c -5.75,-3.51 -15,-5.16 -27.28,5.19 -21.41,18 -12.65,64.72 34.29,103.14 a 4.26,4.26 0 0 1 -0.2,6.88 c -8.51,5.54 -21.2,18.72 11.68,36.29 34,18.18 59.39,16.69 69.16,15.07 a 4.27,4.27 0 0 0 3.47,-5.16 l -10.43,-47.36 a 4.3,4.3 0 0 1 4.19,-5.22 z"
                  style={{ fill: 'url(#linear-gradient-31)' }}
                />
                <path
                  className="cls-37"
                  d="M 1387,1611.3 C 1228,1503 1133.43,1512.63 1030.87,1367 L 885.32,980.45 c -82.59,17.29 -109.52,394.44 91.35,548.33 130.35,89.3 271.69,165 428.61,165 z"
                  style={{ fill: 'url(#linear-gradient-33)' }}
                />
                <path
                  className="cls-38"
                  d="m 1439.24,1610.21 c 0,0 -21.71,-25 -9.34,-62.85 12.37,-37.85 96.72,-58.06 96.72,-58.06 0,0 175.27,117.34 22.11,96.93 -31.87,-4.23 -66.28,38.11 -109.49,23.98 z"
                  style={{ fill: 'url(#linear-gradient-34)' }}
                />
                <path
                  className="cls-39"
                  d="m 1405.28,1693.83 c 0,0 -29.27,-15.54 -31.35,-55.27 -2.08,-39.73 69.32,-89 69.32,-89 0,0 205.75,46.34 55.54,82.44 -31.26,7.54 -48.1,59.45 -93.51,61.83 z"
                  style={{ fill: 'url(#linear-gradient-35)' }}
                />
              </g>
            </svg>
          </div>

          <div className="intro__content">
            <div className="intro__info">
              <h1 className="container__header header--main">
                Asistence pro lidi na vozíčku
              </h1>
              <div className="intro__text">
                <p className="intro__text--slogan">Propojujeme lidi na vozíku s dobrovolníky, aby byl pohyb po městě jednodušší.</p>
                <p>Pomoz těm, kteří to ocení - na místě a v okamžiku, kdy pomoc potřebují.</p>
          
                  
                
               
        
              </div>
            </div>
            <div className="intro__buttons">
              <Button
                className="main--page"
                to="/potrebuji-asistenci"
                text="Potřebuji asistenci"
                description="Jsem na vozíku a hledám pomoc"
                onMouseEnter={() => setAnimationWheelchair(true)}
                onMouseLeave={() => setAnimationWheelchair(false)}
              />

              <Button
                className="main--page"
                to="/dobrovolnik"
                text="Chci být dobrovolník"
                description="Chci věnovat svůj čas a pomoc"
                onMouseEnter={() => setAnimationVolunteer(true)}
                onMouseLeave={() => setAnimationVolunteer(false)}
              />
            </div>
          </div>
        </div>
        <div className="icon--next-section">
          <HashLink to="/#o-projektu">
            {' '}
            <svg viewBox="0 0 32 32">
              <path d="M7, 8 l9, 9 l9,-9 l4,4 l-13,13 l-13,-13 z" />
            </svg>
          </HashLink>
        </div>
      </div>

      <div className="second-section" id="o-projektu">
        <div className="rules container">
          <h2 className="container__header">Jak propojování funguje?</h2>
          <div className="rules__content">
            <div className="rules__person">
              <img className="person__icon" src={magnifier} alt="ikona lupy" />
              <div className="person__description">
                <h3 className="person__header">Člověk na vozíku</h3>
                <p>
                  Člověk na vozíku zadá svůj konkrétní požadavek s upřesněním
                  data, lokality, časového intervalu a účelu doprovodu. Na
                  základě požadavku ho pak kontaktuje dobrovolník, který
                  požadavkům dokáže vyhovět.
                </p>
              </div>
            </div>

            <div className="rules__person">
              <img className="person__icon" src={clock} alt="ikona hodin" />
              <div className="person__description">
                <h3 className="person__header">Dobrovolník</h3>
                <p>
                  Dobrovolníkovi se po registraci zpřístupní všechny aktuální
                  požadavky na asistenci. Na základě svých možností vybírá, komu
                  může vyhovět a následně reaguje na poptávku.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="about container">
          <div className="about__description">
            <h2 className="container__header">O projektu</h2>
            <p className="about__text">
              Ve vašem městě určitě existují místa, které nejsou úplně
              bezbariérová. I síť městské hromadné dopravy, navzdory všem
              snahám, úplně bezbariérová stále není. Dopravit se na určité místo
              proto dokáže být pro některé lidi na vozíku často problém. Ti
              potřebují v těchto situacích asistenci, kterou mohou nabídnout
              dobrovolníci. Dobrovozík se snaží o jejich propojení.
            </p>
            <p className="about__text">
              Hlavním cílem Dobrovozíku je zefektivnění a zjednodušení propojení
              lidí na vozíku s dobrovolníky pro účely jednorázové asistence.
              Především se jedná o doprovod na určité místo a v určitý čas,
              prostřednictvím městské hromadné dopravy. Kromě jiného by měl
              projekt podpořit dobrovolnictví v této oblasti. Může pomoct
              rozšířit síť dobrovolníků a zjednodušit cestu, jak se
              dobrovolníkem stát. Dobrovozík pracuje s myšlenkou, že by město
              mohlo do budoucna dobrovolníky odměňovat za jejich pomoc například
              tím, že jim za určitý počet asistencí zlevní nákup kupónů MHD.
              Časem může aplikace sloužit i k identifikaci těch pro vozíky
              nejvíce problematických míst v jednotlivých městech.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
