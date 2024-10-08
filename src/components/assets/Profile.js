import React from "react";

const Profile = ({ isLogin }) => {
  return (
    <>
      {isLogin ? (
        <>
          <svg
            width="49"
            height="49"
            viewBox="0 0 49 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.75 6.25C0.75 3.21243 3.21243 0.75 6.25 0.75H47.75V47.75H6.25C3.21243 47.75 0.75 45.2876 0.75 42.25V6.25Z"
              fill="#2B2863"
            />
            <path
              d="M0.75 6.25C0.75 3.21243 3.21243 0.75 6.25 0.75H47.75V47.75H6.25C3.21243 47.75 0.75 45.2876 0.75 42.25V6.25Z"
              stroke="#5E6278"
            />
            <path
              opacity="0.3"
              d="M24.25 34.25C29.7728 34.25 34.25 29.7728 34.25 24.25C34.25 18.7272 29.7728 14.25 24.25 14.25C18.7272 14.25 14.25 18.7272 14.25 24.25C14.25 29.7728 18.7272 34.25 24.25 34.25Z"
              fill="#FCFCFC"
            />
            <path
              d="M24.2531 26.1898C26.3518 26.1898 28.0531 24.4885 28.0531 22.3898C28.0531 20.2912 26.3518 18.5898 24.2531 18.5898C22.1544 18.5898 20.4531 20.2912 20.4531 22.3898C20.4531 24.4885 22.1544 26.1898 24.2531 26.1898Z"
              fill="#FCFCFC"
            />
            <path
              d="M24.25 34.25C26.6357 34.2527 28.9427 33.3973 30.75 31.84C30.2814 30.4892 29.4037 29.318 28.2388 28.4891C27.0739 27.6602 25.6797 27.2148 24.25 27.2148C22.8203 27.2148 21.4261 27.6602 20.2612 28.4891C19.0963 29.318 18.2186 30.4892 17.75 31.84C19.5573 33.3973 21.8643 34.2527 24.25 34.25Z"
              fill="#FCFCFC"
            />
          </svg>
        </>
      ) : (
        <svg
          width="22"
          height="21"
          viewBox="0 0 22 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.3"
            d="M14.9592 0.224493L6.81929 0.268535C3.52772 0.286344 0.873812 2.96913 0.891622 6.26069L0.935338 14.3406C0.953148 17.6321 3.63593 20.2861 6.9275 20.2682L15.0674 20.2242C18.3589 20.2064 21.0129 17.5236 20.995 14.232L20.9513 6.15216C20.9335 2.86059 18.2507 0.206684 14.9592 0.224493Z"
            fill="#FCFCFC"
          />
          <path
            d="M10.9406 13.9594C13.0393 13.9594 14.7406 12.2581 14.7406 10.1594C14.7406 8.06069 13.0393 6.35938 10.9406 6.35938C8.84194 6.35938 7.14062 8.06069 7.14062 10.1594C7.14062 12.2581 8.84194 13.9594 10.9406 13.9594Z"
            fill="#FCFCFC"
          />
          <path
            d="M17.4375 19.722C16.9642 18.3759 16.0847 17.2099 14.9204 16.385C13.7561 15.5602 12.3644 15.1172 10.9375 15.1172C9.51061 15.1172 8.11891 15.5602 6.95459 16.385C5.79027 17.2099 4.91075 18.3759 4.4375 19.722C5.2218 20.0801 6.07536 20.2611 6.9375 20.252H15.0675C15.8851 20.2365 16.6912 20.0562 17.4375 19.722Z"
            fill="#FCFCFC"
          />
        </svg>
      )}
    </>
  );
};

export default Profile;
