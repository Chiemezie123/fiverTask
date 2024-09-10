import React from "react";

interface NewsLetterProps {
  openNewsPopover: boolean;
  newsRef: React.RefObject<HTMLDivElement>;
  className?: string;
}

const NewsLetter: React.FC<NewsLetterProps> = ({
  openNewsPopover,
  newsRef,
  className,
}) => {
  return (
    <div
      ref={newsRef}
      className={` fixed  sm:px-4 sm:py-4 lg:px-36 top-[70px] lg:top-0 xl:pt-[20px] left-0 lg:left-20  xl:pl-[80px]   xl:pb-[40px] flex flex-col justify-center items-center  xl:w-[688px]    lg:items-start lg:h-80 w-full lg:w-fit xl:pr-[120px]  transition-transform duration-700  bg-white bg-opacity-45 lg:bg-cream drop-shadow-lg lg:drop-shadow-none  ${
        openNewsPopover ? " translate-y-0" : " -translate-y-[100%]"
      } ${className}   `}
    >
      <div className="xl:w-full">
      <div className="navbar-contact-title h4 ">Join My Newsletter</div>
      <form
        className="rd-form rd-form-inline rd-mailform"
        data-form-output="newsletter-navbar"
        data-form-type="subscribe"
        method="post"
        action="components/rd-mailform/rd-mailform.php"
        noValidate
      >
        <div className="form-group flex ">
          <input
            className="form-control form-control-sm form-control-has-validation form-control-last-child mb-2"
            type="email"
            name="email"
            placeholder="E-mail"
            data-constraints="@Email @Required"
            id="regula-generated-984968"

          />
          <span className="form-validation"></span>
        </div>
        <button
          className="btn btn-sm  h-[50px] "
          type="submit"
          style={{backgroundColor:"#EE6451", border:'none'}}
        >
          Subscribe
        </button>
      </form>
      <div
        className="form-output snackbar snackbar-primary"
        id="newsletter-navbar"
      ></div>
      </div>
    </div>
  );
};

export default NewsLetter;
