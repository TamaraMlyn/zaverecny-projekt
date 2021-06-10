import React from 'react';
import './style.css';

export const Footer = () => {
  return (
    <footer className="container--footer">
      <div className="copyright">
        <i className="las la-copyright copyright-icon"></i>
        <a href="https://tamaramlyn.github.io/o-projektu/">
          Soňa Ouzká &amp; Tamara Mlýnková, 2021
        </a>
      </div>
    
        <p>
          Vytvořeno v rámci Digitální akademie Web od{' '}
          <a href="https://www.czechitas.cz/cs/co-delame/digitalni-akademie">
            <svg className="czechitas-logo" viewBox="0 0 196.109 58.678">
              <path
                className="lco1"
                d="M4.01,24.23c0.49,0.68,1.37,1.2,1.62,1.92c0.25,0.71,0.3,1.38,0.28,2.08c-0.06,1.59-0.72,3.1-1.85,4.28
  c-1.04-1.26-1.59-2.81-1.54-4.4C2.57,26.68,3.09,25.34,4.01,24.23 M4.21,22.38c-1.69,1.4-2.78,3.41-2.86,5.68
  c-0.08,2.36,0.94,4.53,2.65,6.06h0c1.81-1.41,2.99-3.49,3.07-5.86c0.03-0.96,0-2.1-0.42-2.76C6.23,24.85,4.88,23.55,4.21,22.38
  L4.21,22.38z"
              ></path>
              <path
                className="lco1"
                d="M36.75,14.93c-1.51-1.64-3.65-2.6-5.75-2.47l-0.12,0c0.26,1.33,0.1,3.1,0.19,3.98
  c0.08,0.88,0.82,1.65,1.46,2.35c1.51,1.65,3.6,2.47,5.75,2.47c0.13,0,0.26,0,0.39-0.01C38.97,18.98,38.35,16.67,36.75,14.93z
  M33.39,18.01c-0.47-0.51-0.99-1.05-1.13-1.75c-0.15-0.7,0.06-1.69-0.02-2.53c1.42,0.25,2.69,0.93,3.65,1.98
  c1.07,1.17,1.66,2.72,1.69,4.35C35.94,19.9,34.48,19.19,33.39,18.01z"
              ></path>
              <g>
                <path
                  className="lco2"
                  d="M43.66,43.54L24.3,25.94l-0.71-0.65l-0.17-0.15l-0.66-0.6l-2.72-2.47v3.66v1.02v0.11v1.1v27.1l8.23-6.91
  l4.78,9.76l5.98-3.24l-4.7-9.17L43.66,43.54z M37.53,54.21l-4.02,2.19l-4.89-9.99l-7.51,6.31V27.61v-1.09v-0.15v-1.02v-0.83
  l0.62,0.56l0.71,0.65l0.14,0.13l0.76,0.69l18.01,16.37l-8.7,1.81L37.53,54.21z"
                ></path>
              </g>
              <path
                className="lco2"
                d="M62.63,27.09h-0.17c-0.32-0.58-0.93-1.05-1.82-1.4c-0.89-0.36-1.97-0.54-3.23-0.54c-1.36,0-2.55,0.49-3.56,1.45
  c-1.02,0.97-1.52,2.13-1.52,3.49c0,1.71,0.47,3.08,1.4,4.13c0.93,1.05,2.18,1.58,3.75,1.58c2.4,0,4.03-0.58,4.91-1.73h0.17v2.15
  c0,1.13-0.51,2.06-1.52,2.78c-1.01,0.73-2.35,1.09-4.01,1.09c-2.61,0-4.85-0.89-6.73-2.68c-1.88-1.79-2.82-3.99-2.82-6.62
  c0-2.77,0.91-5.11,2.73-7.02c1.82-1.91,4.26-2.87,7.33-2.87c1.48,0,2.69,0.39,3.65,1.16c0.96,0.77,1.43,1.72,1.43,2.85V27.09z"
              ></path>
              <path
                className="lco2"
                d="M79.52,37.57c0,0.55-0.25,1.05-0.74,1.5c-0.5,0.45-1.04,0.68-1.64,0.68h-9.09c-1.04,0-1.83-0.22-2.37-0.66
  c-0.54-0.44-0.81-1.04-0.81-1.8c0-1.38,0.94-3.09,2.84-5.12l4.7-5.12c0.81-0.92,1.34-1.62,1.59-2.1h-9.16v-1.42
  c0-0.71,0.26-1.3,0.79-1.76c0.53-0.46,1.29-0.69,2.28-0.69h8.47c0.99,0,1.72,0.24,2.2,0.73c0.47,0.49,0.71,1.04,0.71,1.66
  c0,1.57-0.79,3.22-2.39,4.95l-4.67,5.05c-0.83,0.92-1.42,1.69-1.76,2.32h9.06V37.57z"
              ></path>
              <path
                className="lco2"
                d="M97.88,27.89c0,1.68-0.67,2.86-2.02,3.53c-1.35,0.67-3.59,1-6.73,1h-3.04c0.16,1.15,0.73,2.08,1.69,2.78
  c0.97,0.7,2.14,1.05,3.53,1.05c2.54,0,4.44-0.59,5.71-1.76h0.17v1.45c0,2.81-2.25,4.22-6.74,4.22c-2.42,0-4.55-0.88-6.4-2.63
  c-1.84-1.75-2.77-4-2.77-6.74c0-3.07,0.85-5.52,2.54-7.37c1.69-1.84,3.89-2.77,6.59-2.77c2.03,0,3.78,0.67,5.26,2.01
  C97.14,24,97.88,25.74,97.88,27.89z M93.52,27.33c0-0.92-0.31-1.62-0.93-2.09c-0.62-0.47-1.49-0.71-2.59-0.71
  c-1.11,0-2.02,0.39-2.75,1.16c-0.73,0.77-1.11,1.71-1.16,2.82l-0.03,0.62h2.08c2.14,0,3.58-0.13,4.3-0.4
  C93.16,28.47,93.52,28,93.52,27.33z"
              ></path>
              <path
                className="lco2"
                d="M115.07,27.09h-0.17c-0.32-0.58-0.93-1.05-1.81-1.4c-0.89-0.36-1.97-0.54-3.23-0.54
  c-1.36,0-2.55,0.49-3.56,1.45c-1.01,0.97-1.52,2.13-1.52,3.49c0,1.71,0.47,3.08,1.4,4.13c0.93,1.05,2.18,1.58,3.75,1.58
  c2.4,0,4.03-0.58,4.91-1.73H115v2.15c0,1.13-0.51,2.06-1.52,2.78c-1.01,0.73-2.35,1.09-4.01,1.09c-2.6,0-4.85-0.89-6.72-2.68
  c-1.88-1.79-2.82-3.99-2.82-6.62c0-2.77,0.91-5.11,2.73-7.02c1.82-1.91,4.27-2.87,7.33-2.87c1.47,0,2.69,0.39,3.65,1.16
  c0.95,0.77,1.43,1.72,1.43,2.85V27.09z"
              ></path>
              <path
                className="lco2"
                d="M134.75,39.75h-1.52c-0.97,0-1.74-0.27-2.3-0.81c-0.57-0.54-0.85-1.31-0.85-2.3v-7.61
  c0-1.45-0.34-2.52-1.02-3.22c-0.68-0.69-1.57-1.04-2.68-1.04c-0.88,0-1.66,0.36-2.34,1.07c-0.68,0.71-1.02,1.82-1.02,3.32v10.58
  h-1.52c-2.12,0-3.18-1.04-3.18-3.11V14.85h1.45c1.06,0,1.87,0.27,2.44,0.81c0.56,0.54,0.85,1.26,0.85,2.16v5.33
  c0.39-0.64,0.96-1.22,1.71-1.73c0.75-0.51,1.53-0.76,2.33-0.76c2.42,0,4.3,0.71,5.64,2.11c1.34,1.4,2.01,3.42,2.01,6.05V39.75z"
              ></path>
              <g>
                <path
                  className="lco1"
                  d="M142.97,15.13c0.54,0.53,0.81,1.16,0.81,1.9c0,0.74-0.27,1.38-0.81,1.92c-0.54,0.54-1.18,0.81-1.92,0.81
  c-0.74,0-1.37-0.27-1.9-0.81c-0.53-0.54-0.8-1.18-0.8-1.92c0-0.74,0.27-1.37,0.8-1.9c0.53-0.53,1.16-0.8,1.9-0.8
  C141.79,14.33,142.43,14.6,142.97,15.13z M147.1,37.12c0,0.99-0.21,1.71-0.64,2.15c-0.43,0.44-1.14,0.66-2.13,0.66
  c-1.8,0-3.18-0.5-4.13-1.49c-0.96-0.99-1.43-2.43-1.43-4.32V21.49h1.31c2.21,0,3.32,1.15,3.32,3.46v8.71
  c0,0.92,0.21,1.56,0.64,1.92c0.43,0.36,1.16,0.53,2.2,0.53h0.86V37.12z"
                ></path>
              </g>
              <g>
                <path
                  className="lco1"
                  d="M149.07,21.84c0-0.88,0.09-1.56,0.28-2.04c0.19-0.49,0.54-1.04,1.07-1.66c0.74-0.85,1.46-1.28,2.18-1.28h1.07
  v4.22h6.47v1.9c0,0.55-0.24,1.06-0.73,1.52c-0.49,0.46-1.16,0.69-2.04,0.69h-3.7v7.3c0,2.24,0.98,3.36,2.94,3.36
  c1.52,0,2.64-0.22,3.35-0.66h0.18v1.66c0,0.97-0.35,1.73-1.06,2.28c-0.7,0.55-1.71,0.83-3.03,0.83c-2.31,0-4.05-0.6-5.22-1.8
  c-1.18-1.2-1.76-2.91-1.76-5.12V21.84z"
                ></path>
              </g>
              <path
                className="lco2"
                d="M177.38,33.39c0,1.96-0.66,3.56-1.97,4.81c-1.31,1.25-3.01,1.87-5.08,1.87h-0.93c-2.19,0-3.98-0.55-5.38-1.66
  c-1.4-1.11-2.09-2.53-2.09-4.25c0-1.8,0.73-3.22,2.2-4.27c1.46-1.05,3.82-1.57,7.07-1.57h1.63v-0.24c0-1.29-0.31-2.19-0.93-2.68
  c-0.62-0.5-1.65-0.74-3.08-0.74c-1.5,0-2.75,0.22-3.75,0.66c-1,0.44-1.72,0.93-2.16,1.49h-0.17v-1.49c0-1.2,0.56-2.26,1.69-3.18
  c1.13-0.92,2.82-1.38,5.09-1.38c1.11,0,2.11,0.14,3.01,0.41c0.9,0.28,1.72,0.72,2.47,1.33c0.75,0.61,1.34,1.48,1.76,2.61
  c0.42,1.13,0.64,2.46,0.64,4.01V33.39z M172.85,33.42v-1.8h-1.66c-1.68,0-2.86,0.19-3.53,0.57c-0.67,0.38-1,0.97-1,1.78
  c0,0.74,0.28,1.31,0.85,1.71c0.57,0.4,1.36,0.61,2.37,0.61C171.86,36.29,172.85,35.34,172.85,33.42z"
              ></path>
              <path
                className="lco2"
                d="M194.11,33.87c0,1.98-0.68,3.53-2.03,4.63c-1.35,1.11-3.27,1.66-5.75,1.66c-1.68,0-3.1-0.37-4.26-1.11
  c-1.15-0.74-1.73-1.59-1.73-2.56v-2.11h0.17c0.51,0.48,1.3,0.9,2.37,1.25c1.07,0.35,2.15,0.52,3.23,0.52c2.26,0,3.39-0.68,3.39-2.04
  c0-0.55-0.26-0.98-0.78-1.28c-0.52-0.3-1.55-0.55-3.1-0.76c-1.98-0.28-3.45-0.82-4.41-1.62c-0.96-0.81-1.43-1.91-1.43-3.32
  c0-1.8,0.74-3.33,2.21-4.58c1.48-1.26,3.38-1.89,5.7-1.89c1.94,0,3.41,0.4,4.43,1.21c1.01,0.81,1.52,1.73,1.52,2.77v1.76h-0.17
  c-0.48-0.51-1.22-0.92-2.21-1.25c-0.99-0.32-2.03-0.48-3.11-0.48c-2.49,0-3.73,0.69-3.73,2.07c0,0.49,0.23,0.85,0.71,1.09
  c0.47,0.24,1.48,0.49,3.03,0.74C192.13,29.22,194.11,30.99,194.11,33.87z"
              ></path>
              <path
                className="lco1"
                d="M29.75,13.15l-0.21-1.12C28.15,6.15,22.89,1.78,16.59,1.78C9.24,1.78,3.28,7.74,3.28,15.1
  c0,2.24,0.56,4.34,1.53,6.19l-0.01,0l0.06,0.11c0.03,0.06,0.07,0.11,0.1,0.17l0.45,0.73c2.37,3.67,6.49,6.11,11.18,6.11
  c1.19,0,2.34-0.17,3.44-0.46v-1.1v-0.11c-1.09,0.32-2.24,0.5-3.44,0.5c-4.2,0-7.91-2.14-10.09-5.39c2.42-1.04,4.82-2.62,6.95-4.58
  c2.82-2.59,4.95-5.56,6.16-8.6l0.35-0.87l0.63,0.7c1.09,1.2,2.4,2.26,3.78,3.04c1.38,0.79,2.81,1.28,4.18,1.48
  c0.12,0.68,0.19,1.37,0.19,2.08c0,4.17-2.11,7.85-5.32,10.04l0.17,0.15l0.71,0.65c3.39-2.41,5.61-6.37,5.61-10.84
  C29.91,14.43,29.84,13.78,29.75,13.15z M12.68,16.42c-2.09,1.92-4.42,3.44-6.78,4.43c-0.93-1.71-1.45-3.67-1.45-5.75
  c0-6.7,5.45-12.15,12.15-12.15c1,0,1.96,0.13,2.89,0.36C19.68,7.34,17.09,12.38,12.68,16.42z M24.94,10.54
  c-1.72-0.98-3.45-2.6-4.59-4.2c0.17-0.84,0.3-1.9,0.3-2.68c3.69,1.31,6.56,4.35,7.63,8.15C27.18,11.59,26.06,11.17,24.94,10.54z"
              ></path>
            </svg>
          </a>
        </p>
      <div>
        <a href="https://www.freepik.com/vectorjuice">Icons by vector juice</a>
      </div>
    </footer>
  );
};
