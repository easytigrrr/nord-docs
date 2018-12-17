/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import React from "react";
import styled from "styled-components";
import { lighten } from "polished";

import { colors } from "styles/theme";

import { svgFillColorOutlines, svgFillColorSnowflakes, svgTransitionFill } from "../../shared/styles";

const Snowflakes = styled.g`
  fill: ${svgFillColorSnowflakes};
  ${svgTransitionFill};
`;

const Path = styled.path`
  fill: ${svgFillColorOutlines};
  ${svgTransitionFill};
`;

/**
 * A SVG vector illustration component rendering an igloo hemisphere with snowflakes, clouds and thr sun.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.3.0
 */
const IglooHemisphere = props => (
  <svg
    {...props}
    data-testid="nd-molecules-core-emptystate-styled-svg-igloo-hemisphere"
    viewBox="0 0 471.096 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Snowflakes>
      <circle cx="432.226" cy="179.1" r="9.367" />
      <circle cx="38.866" cy="291.491" r="9.367" />
      <circle cx="95.061" cy="179.1" r="9.367" />
      <path d="M38.866 207.2c5.17 0 9.364 4.191 9.364 9.367 0 5.171-4.194 9.362-9.364 9.362-5.174 0-9.367-4.191-9.367-9.362a9.365 9.365 0 0 1 9.367-9.367z" />
      <circle cx="207.45" cy="179.1" r="9.367" />
      <path d="M151.254 207.2a9.365 9.365 0 0 1 9.367 9.367c0 5.171-4.193 9.362-9.367 9.362-5.171 0-9.364-4.191-9.364-9.362 0-5.176 4.193-9.367 9.364-9.367z" />
      <circle cx="319.839" cy="179.1" r="9.367" />
      <circle cx="432.226" cy="254.029" r="9.367" />
      <circle cx="95.061" cy="254.029" r="9.367" />
    </Snowflakes>
    <path
      d="M270.039 132.266c0-19.649 15.927-35.571 35.571-35.571 2.949 0 5.807.359 8.548 1.035 4.775-18.688 21.72-32.507 41.893-32.507 20.178 0 37.126 13.819 41.902 32.507a35.523 35.523 0 0 1 8.539-1.035c19.648 0 35.575 15.922 35.575 35.571H270.039z"
      fill={colors.nord4}
    />
    <Path d="M260.671 132.266c0 5.176 4.196 9.362 9.367 9.362h172.028c5.198 0 9.391-4.187 9.391-9.362 0-.262-.01-.52-.028-.778-.414-24.419-20.418-44.16-44.934-44.16-.741 0-1.481.019-2.222.055-8.244-18.913-27.024-31.528-48.215-31.528s-39.974 12.615-48.223 31.528a44.298 44.298 0 0 0-2.217-.055c-24.782 0-44.947 20.155-44.947 44.938zm44.939-26.209c2.13 0 4.251.257 6.303.764 4.987 1.233 10.048-1.794 11.317-6.772 3.828-14.993 17.326-25.464 32.825-25.464s28.997 10.471 32.824 25.464c1.27 4.978 6.331 8.005 11.317 6.772a26.328 26.328 0 0 1 6.299-.764c11.156 0 20.698 7.002 24.479 16.842h-149.84c3.783-9.84 13.324-16.842 24.476-16.842z" />
    <path
      d="M165.479 96.695c-2.944 0-5.804.359-8.543 1.035-4.771-18.688-21.719-32.507-41.897-32.507-20.176 0-37.125 13.819-41.897 32.507a35.593 35.593 0 0 0-8.543-1.035c-19.647 0-35.574 15.922-35.574 35.571h172.028c.002-19.649-15.925-35.571-35.574-35.571z"
      fill={colors.nord4}
    />
    <Path d="M29.027 141.628h44.115c5.173 0 9.367-4.187 9.367-9.362 0-5.171-4.193-9.362-9.367-9.362H40.121c3.777-9.845 13.328-16.843 24.48-16.843 2.127 0 4.248.253 6.3.764a9.37 9.37 0 0 0 11.319-6.777c3.828-14.993 17.326-25.459 32.823-25.459s28.995 10.466 32.823 25.459c1.272 4.982 6.331 8.005 11.317 6.777a26.363 26.363 0 0 1 6.301-.764c11.153 0 20.7 6.998 24.479 16.843h-79.357c-5.171 0-9.365 4.191-9.365 9.362a9.36 9.36 0 0 0 9.365 9.362h90.449c5.173 0 9.367-4.187 9.367-9.362 0-24.779-20.162-44.938-44.941-44.938-.74 0-1.481.019-2.222.055-8.245-18.913-27.028-31.528-48.216-31.528S75.069 68.47 66.825 87.383a44.528 44.528 0 0 0-2.222-.055c-24.779 0-44.938 20.164-44.938 44.938-.005 5.176 4.187 9.362 9.362 9.362z" />
    <path
      d="M235.548 9.367c20.688 0 37.462 16.773 37.462 37.462 0 20.694-16.773 37.467-37.462 37.467-20.691 0-37.465-16.773-37.465-37.467 0-20.688 16.774-37.462 37.465-37.462z"
      fill={colors.nord13}
    />
    <Path d="M235.548 93.658c25.822 0 46.828-21.006 46.828-46.829S261.371 0 235.548 0c-25.823 0-46.829 21.006-46.829 46.829s21.006 46.829 46.829 46.829zm0-74.929c15.49 0 28.096 12.606 28.096 28.1 0 15.495-12.605 28.101-28.096 28.101-15.493 0-28.098-12.606-28.098-28.101 0-15.494 12.606-28.1 28.098-28.1z" />
    <path
      d="M284.001 216.212c-62.455 0-113.086 50.634-113.086 113.091v44.956h226.176v-44.956c0-62.456-50.628-113.091-113.09-113.091z"
      fill={lighten(0.1, colors.nord8)}
    />
    <path
      d="M264.922 272.758c-31.23 0-56.547 25.316-56.547 56.546v44.956h113.088v-44.956c0-31.23-25.311-56.546-56.541-56.546z"
      fill={colors.nord8}
    />
    <path
      d="M264.922 310.22c-10.525 0-19.083 8.562-19.083 19.084v44.956h38.162v-44.956c0-10.523-8.562-19.084-19.079-19.084z"
      fill={colors.nord10}
    />
    <path
      d="M235.548 361.77c-16.155 0-16.137-7.49-32.292-7.49s-16.155 7.49-32.312 7.49c-16.157 0-16.157-7.49-32.314-7.49-16.155 0-16.155 7.49-32.313 7.49s-16.157-7.49-32.314-7.49c-16.159 0-16.159 7.49-32.32 7.49-16.158 0-16.158-7.49-32.319-7.49 38.044 87.228 125.105 148.354 226.184 148.354 101.078 0 188.14-61.127 226.187-148.354-16.162 0-16.162 7.49-32.324 7.49-16.157 0-16.157-7.49-32.319-7.49-16.156 0-16.156 7.49-32.309 7.49-16.158 0-16.158-7.49-32.314-7.49-16.158 0-16.158 7.49-32.314 7.49-16.157 0-16.157-7.49-32.314-7.49s-16.14 7.49-32.293 7.49z"
      fill={colors.nord6}
    />
    <Path d="M469.565 349.15a9.356 9.356 0 0 0-7.836-4.237c-10.144 0-15.664 2.558-20.1 4.614-3.602 1.675-6.201 2.88-12.219 2.88-6.008 0-8.616-1.205-12.219-2.88-2.825-1.312-6.1-2.824-10.733-3.749v-16.475c0-25.662-7.853-50.233-22.722-71.061-3-4.209-8.852-5.189-13.066-2.185-4.204 3.004-5.18 8.856-2.181 13.065 12.588 17.634 19.24 38.442 19.24 60.185v16.476c-4.629.924-7.904 2.438-10.738 3.748-3.598 1.671-6.201 2.876-12.209 2.876-6.014 0-8.617-1.205-12.22-2.876-4.435-2.056-9.956-4.614-20.095-4.614-.562 0-1.104.01-1.634.023v-15.637c0-36.34-29.567-65.908-65.912-65.908-9.992 0-19.603 2.182-28.548 6.491-4.663 2.241-6.623 7.84-4.38 12.5 2.243 4.665 7.842 6.62 12.501 4.38 6.396-3.078 13.269-4.637 20.427-4.637 26.021 0 47.184 21.162 47.184 47.178v20.349c-3.469 1.605-6.091 2.751-11.952 2.751-2.889 0-4.978-.28-6.781-.75v-22.35c0-15.688-12.763-28.449-28.45-28.449s-28.443 12.762-28.443 28.449v23.086c-.31.009-.621.014-.95.014-6.008 0-8.61-1.205-12.212-2.876-1.647-.763-3.444-1.596-5.572-2.346v-17.882c0-7.159 1.56-14.032 4.638-20.427 2.245-4.66.283-10.259-4.378-12.5-4.66-2.24-10.259-.285-12.5 4.375-4.308 8.949-6.493 18.559-6.493 28.552v15.774c-7.536.59-12.109 2.701-15.886 4.449-.991.464-1.912.889-2.846 1.26v-21.483c0-57.194 46.533-103.725 103.725-103.725 21.742 0 42.546 6.652 60.175 19.235 4.214 3.004 10.062 2.029 13.065-2.181 3.009-4.209 2.024-10.061-2.181-13.065-20.827-14.864-45.398-22.722-71.06-22.722-67.523 0-122.456 54.935-122.456 122.458v21.483c-.936-.371-1.856-.8-2.85-1.26-4.433-2.057-9.954-4.614-20.096-4.614-10.144 0-15.665 2.558-20.097 4.614-3.603 1.67-6.204 2.875-12.212 2.875-5.152 0-7.724-.906-9.914-1.84a9.369 9.369 0 0 0-12.283 4.96 9.361 9.361 0 0 0 4.957 12.282c3.878 1.647 8.959 3.331 17.24 3.331 10.145 0 15.665-2.558 20.095-4.613 3.603-1.666 6.207-2.876 12.217-2.876 6.01 0 8.612 1.205 12.214 2.876 4.433 2.056 9.951 4.613 20.095 4.613 10.142 0 15.66-2.558 20.093-4.613 3.602-1.666 6.204-2.876 12.212-2.876 6.011 0 8.613 1.205 12.215 2.876 4.433 2.056 9.951 4.613 20.093 4.613 10.145 0 15.665-2.558 20.1-4.613 3.599-1.666 6.201-2.876 12.21-2.876s8.612 1.205 12.22 2.876c4.434 2.056 9.945 4.613 20.095 4.613 10.14 0 15.66-2.558 20.095-4.613 3.607-1.671 6.202-2.876 12.22-2.876 6.008 0 8.611 1.205 12.209 2.876 4.436 2.056 9.956 4.613 20.105 4.613 10.139 0 15.66-2.558 20.095-4.613 3.603-1.671 6.202-2.876 12.214-2.876 6.014 0 8.617 1.205 12.22 2.876 4.436 2.056 9.951 4.613 20.1 4.613 6.561 0 11.188-1.067 14.842-2.383a238.775 238.775 0 0 1-28.763 41.7c-3.367 3.919-2.926 9.835.993 13.203a9.33 9.33 0 0 0 6.101 2.264 9.35 9.35 0 0 0 7.112-3.258c16.736-19.483 30.41-41.229 40.618-64.638a9.352 9.352 0 0 0-.748-8.872zm-214.358-2.567v-17.279c0-5.355 4.356-9.712 9.716-9.712 5.355 0 9.712 4.356 9.712 9.712v16.041a50.849 50.849 0 0 0-6.8-.432c-5.314 0-9.344.703-12.628 1.67z" />
    <Path d="M390.002 435.949c-42.997 36.961-97.845 57.322-154.454 57.322-87.581 0-167.451-48.264-208.721-124.519 3.651 1.312 8.279 2.388 14.846 2.388 8.277 0 13.358-1.688 17.238-3.336 4.761-2.023 6.982-7.521 4.959-12.282-2.022-4.762-7.522-6.979-12.284-4.956-2.192.93-4.764 1.841-9.912 1.841-6.013 0-8.614-1.205-12.217-2.88-4.433-2.057-9.951-4.614-20.095-4.614a9.373 9.373 0 0 0-7.835 4.237 9.371 9.371 0 0 0-.75 8.874C41.58 451.563 133.733 512 235.548 512c61.081 0 120.272-21.963 166.664-61.85 3.919-3.372 4.37-9.283.994-13.208-3.373-3.924-9.284-4.365-13.204-.993z" />
  </svg>
);

export default IglooHemisphere;
