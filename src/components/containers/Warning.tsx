// * IMPORTS
// Icons
import iconWarning from '../../theme/images/icons/error.svg';

// React Hooks
import { useState } from 'react';

// * WARNING COMPONENT
export default function Warning() {
  // Set up for closing Warning
  const [hideWarning, setHideWarning] = useState(false);

  // Render Warning
  return (
    <article className="">

      {/* Warning Wrapper */}
      { !hideWarning &&
      <div id="qd-section-warning" className="
      qd-warning
      m-4 p-4 py-8
      animate__animated animate__fadeIn animate__slow
      flex flex-col text-center content-center items-center">
        {/* Header */}
        <section>
          <img src={iconWarning} alt="Warning Icon" className="
          animate__animated animate__flash animate__slower animate__infinite
          qd-warning-icon inline w-8
          "/>
          <h3>WARNING:</h3>
        </section>

        {/* Text */}
        <section className="text-left">
          <p className="mb-1">
            - This web app is used for providing <b>rough estimates </b>
            when calculating your expenses and savings, ESPECIALLY
            when choosing to calculate income tax.
          </p>
          <p className="mb-1">
            - The income tax model is from <b>2022</b>, and it does NOT
            account for your specific case - it is <b>highly
            recommended</b> that you <b>skip</b> tax calculations. This
            web app should NOT be used as a template for filing taxes.
          </p>
          <p className="mb-1">
            - The tax model is there if you would like to use it, but
            it should not be used as a guide.
          </p>
        </section>

        {/* Button to close warning */}
        <button onClick={() => setHideWarning(true)}>
          Close Warning
        </button>
      </div>
      }

    </article>
  );
}