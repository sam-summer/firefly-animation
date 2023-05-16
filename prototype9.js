var currentFeature = 0;

function showCurrentFeature() {
  const features = document.querySelectorAll(".feature");
  features.forEach(feature => {

    const rect = feature.getBoundingClientRect();
    const {
      innerHeight: vpHeight,
      innerWidth: vpWidth
    } = window;
    const focusMargin = 0.1 * vpHeight;

    const svgInnerWrapper = document.getElementById("svg-inner-wrapper");
    const svgHeight = svgInnerWrapper.clientHeight;
    const svgWidth = svgInnerWrapper.clientWidth;

    const cursor = document.getElementById("cursor");
    function click() {
      setTimeout(() => {
        cursor.style.backgroundColor = "transparent";
        setTimeout(() => {
          cursor.style.backgroundColor = "#303048";
        }, 100);
      }, 500);
    }

    // Feature 1 SVGs
    const assetCards = document.getElementById("assetCards");
    const coverageCard = document.getElementById("coverageCard");
    const insightCards = document.getElementById("insightCards");
    function hideFeature1() {
      assetCards.classList.add("display-none");
      coverageCard.classList.add("display-none");
      insightCards.classList.add("display-none");
    }
    function revealFeature1() {
      assetCards.classList.remove("display-none");
      coverageCard.classList.remove("display-none");
      insightCards.classList.remove("display-none");
    }

    // Feature 2 SVGs
    const coverageCardWithHighlight = document.getElementById("coverageCardWithHighlight");
    const unmanagedRow1 = document.getElementById("unmanagedRow1");
    const unmanagedRow2 = document.getElementById("unmanagedRow2");
    const unmanagedRow2WithHighlight = document.getElementById("unmanagedRow2WithHighlight");
    const unmanagedRow3 = document.getElementById("unmanagedRow3");
    const unmanagedDetails = document.getElementById("unmanagedDetails");
    const unmanagedCode = document.getElementById("unmanagedCode");
    const unmanagedPR = document.getElementById("unmanagedPR");
    function hideFeature2() {
      assetCards.classList.add("display-none");
      coverageCard.classList.add("display-none");
      coverageCardWithHighlight.classList.add("display-none");
      insightCards.classList.add("display-none");
      unmanagedRow1.classList.add("display-none");
      unmanagedRow2.classList.add("display-none");
      unmanagedRow2WithHighlight.classList.add("display-none");
      unmanagedRow3.classList.add("display-none");
      unmanagedDetails.classList.add("display-none");
      unmanagedCode.classList.add("display-none");
      unmanagedPR.classList.add("display-none");
    }
    function revealFeature2() {
      assetCards.classList.remove("display-none");
      coverageCard.classList.remove("display-none");
      insightCards.classList.remove("display-none");
      unmanagedRow1.classList.remove("display-none");
      unmanagedRow2.classList.remove("display-none");
      unmanagedRow3.classList.remove("display-none");
      unmanagedDetails.classList.remove("display-none");
      unmanagedCode.classList.remove("display-none");
      unmanagedPR.classList.remove("display-none");
    }

    // Feature 3 SVGs
    const driftAlert = document.getElementById("driftAlert");
    const driftCode = document.getElementById("driftCode");
    const driftPR = document.getElementById("driftPR");
    function hideFeature3() {
      driftAlert.classList.add("display-none");
      driftCode.classList.add("display-none");
      driftPR.classList.add("display-none");
    }
    function revealFeature3() {
      driftAlert.classList.remove("display-none");
      driftCode.classList.remove("display-none");
      driftPR.classList.remove("display-none");
    }

    // Feature 4 SVGs
    const insightsWrapper = document.getElementById("insightsWrapper");
    const optimizationCard = document.getElementById("optimizationCard");
    const misconfigurationCard = document.getElementById("misconfigurationCard");
    const reliabilityCard = document.getElementById("reliabilityCard");
    function hideFeature4() {
      insightsWrapper.classList.add("display-none");
      optimizationCard.classList.add("display-none");
      misconfigurationCard.classList.add("display-none");
      reliabilityCard.classList.add("display-none");
    }
    function revealFeature4() {
      insightsWrapper.classList.remove("display-none");
      optimizationCard.classList.remove("display-none");
      misconfigurationCard.classList.remove("display-none");
      reliabilityCard.classList.remove("display-none");
    }

    function showFeature1() {
      currentFeature = 1;

      hideFeature2();
      hideFeature3();
      hideFeature4();
      revealFeature1();

      // Lighten coverage card and insight cards
      coverageCard.classList.add("quarter-opacity");
      insightCards.classList.add("quarter-opacity");
    }

    function showFeature2() {
      currentFeature = 2;

      hideFeature1();
      hideFeature3();
      hideFeature4();
      revealFeature2();

      // Lighten asset cards, darken coverage card
      assetCards.classList.add("quarter-opacity");
      coverageCard.classList.remove("quarter-opacity");
      insightCards.classList.add("quarter-opacity");

      // After 1000ms, move cursor over “unmanaged”
      setTimeout(() => {
        var xTarget = svgWidth * 0.55;
        var yTarget = svgHeight * 0.68;
        cursor.style.transform = `translate3d(${xTarget}px, ${yTarget}px, 0)`;

        // After 700ms, highlight "unmanaged"
        setTimeout(() => {
          coverageCard.classList.add("display-none");
          coverageCardWithHighlight.classList.remove("display-none");
          click();

          // Hide cards and show unmanaged table
          setTimeout(() => {
            assetCards.style.transform = `translate3d(0, ${-svgHeight}px, 0)`;
            coverageCardWithHighlight.style.transform = `translate3d(0, ${-svgHeight}px, 0)`;
            insightCards.style.transform = `translate3d(0, ${-svgHeight}px, 0)`;
            unmanagedRow1.style.transform = `translate3d(0, ${-svgHeight}px, 0)`;
            unmanagedRow2.style.transform = `translate3d(0, ${-svgHeight + 1}px, 0)`;
            unmanagedRow2WithHighlight.style.transform = `translate3d(0, ${-svgHeight + 1}px, 0)`;
            unmanagedRow3.style.transform = `translate3d(0, ${-svgHeight}px, 0)`;
            unmanagedDetails.style.transform = `translate3d(0, ${-svgHeight}px, 0)`;

            // After 1000ms, move cursor over asset
            setTimeout(() => {
              var xTarget = svgWidth * 0.44;
              var yTarget = svgHeight * 0.29;
              cursor.style.transform = `translate3d(${xTarget}px, ${yTarget}px, 0)`;

              // After 700ms, highlight asset
              setTimeout(() => {
                unmanagedRow2.classList.add("display-none");
                unmanagedRow2WithHighlight.classList.remove("display-none");
                click();

                // Hide first and third unmanaged rows
                setTimeout(() => {
                  unmanagedRow1.classList.add("no-opacity");
                  unmanagedRow3.classList.add("no-opacity");

                  // Shrink height of first and third unmanaged rows
                  setTimeout(() => {
                    unmanagedRow1.classList.add("max-height-0");
                    unmanagedRow3.classList.add("max-height-0");
                    unmanagedRow2WithHighlight.classList.add("margin-bottom-15");
                    unmanagedDetails.classList.remove("no-opacity");

                    // Move cursor over "codify"
                    setTimeout(() => {
                      unmanagedRow1.classList.add("display-none");
                      unmanagedRow3.classList.add("display-none");
                      var xTarget = svgWidth * 0.11;
                      var yTarget = svgHeight * 0.73;
                      cursor.style.transform = `translate3d(${xTarget}px, ${yTarget}px, 0)`;

                      // Hide unmanaged asset details, show code
                      setTimeout(() => {
                        click();
                        setTimeout(() => {
                          // unmanagedDetails.classList.add("no-opacity");
                          unmanagedDetails.classList.add("max-height-0");
                          unmanagedCode.style.transform = `translate3d(0, ${-svgHeight}px, 0)`;
                          
                          // Move cursor over "pull request"
                          setTimeout(() => {
                            var xTarget = svgWidth * 0.73;
                            var yTarget = svgHeight * 0.81;
                            cursor.style.transform = `translate3d(${xTarget}px, ${yTarget}px, 0)`;
                            setTimeout(() => {
                              click()

                              // Show codification PR
                              setTimeout(() => {
                                unmanagedRow2WithHighlight.classList.add("quarter-opacity");
                                unmanagedCode.classList.add("quarter-opacity");
                                unmanagedPR.style.transform = `translate3d(0, ${-1.85 * svgHeight}px, 0)`;
                              }, 700);

                            }, 1000);
                          }, 1000);

                        }, 700);
                      }, 1000);

                    }, 500);

                  }, 500);

                }, 700);


              }, 700);

            }, 1000);

          }, 700);

        }, 700);

      }, 1000);
    }

    function showFeature3() {
      currentFeature = 3;

      hideFeature1();
      hideFeature2();
      hideFeature4();
      revealFeature3();

      // Hide all visibile items except drift alert
      unmanagedRow2WithHighlight.classList.add("no-opacity");
      unmanagedCode.classList.add("no-opacity");
      unmanagedPR.classList.add("no-opacity");
      setTimeout(() => {
        assetCards.classList.add("max-height-0");
        coverageCard.classList.add("max-height-0");
        coverageCardWithHighlight.classList.add("max-height-0");
        insightCards.classList.add("max-height-0");
        unmanagedRow2WithHighlight.classList.add("max-height-0");
        unmanagedCode.classList.add("max-height-0");
        unmanagedPR.classList.add("max-height-0");

        // Move cursor to and click alert
        setTimeout(() => {
          var xTarget = svgWidth * 0.45;
          var yTarget = svgHeight * 0.19;
          cursor.style.transform = `translate3d(${xTarget}px, ${yTarget}px, 0)`;
          setTimeout(() => {
            click()

            // Show drift code
            setTimeout(() => {
              driftAlert.classList.add("max-height-0");
              driftCode.classList.remove("no-opacity");

              // Move cursor to and click "fix drift"
              setTimeout(() => {
                var xTarget = svgWidth * 0.4;
                var yTarget = svgHeight * 0.8;
                cursor.style.transform = `translate3d(${xTarget}px, ${yTarget}px, 0)`;
                setTimeout(() => {
                  click();

                  // Show drift fix PR
                  setTimeout(() => {
                    cursor.classList.add("no-opacity");
                    driftCode.classList.add("no-opacity");
                    driftCode.classList.add("max-height-0");
                    driftPR.classList.remove("no-opacity");
                  }, 700);

                }, 1200);
              }, 1000);

            }, 500);

          }, 1000);
        }, 1000);

      }, 500);
    }

    function showFeature4() {
      currentFeature = 4;

      hideFeature1();
      hideFeature2();
      hideFeature3();
      revealFeature4();

      // Hide drift code and drift PR
      driftPR.classList.add("no-opacity");
      setTimeout(() => {
        driftCode.classList.add("max-height-0");
        driftPR.classList.add("max-height-0");
      }, 500);

      // Show optimization card
      setTimeout(() => {
        optimizationCard.classList.remove("no-opacity");

        // Show misconfiguration card
        setTimeout(() => {
          misconfigurationCard.classList.remove("no-opacity");

          // Show reliability card
          setTimeout(() => {
            reliabilityCard.classList.remove("no-opacity");
          }, 1000);

        }, 1000);

      }, 500);
    }

    // ———————————————————————
    // Is in focus
    // ———————————————————————

    if (
      rect.top > focusMargin &&
      rect.bottom < vpHeight - focusMargin
    ) {
      feature.classList.remove("half-opacity");
      if (feature.id == "control" && currentFeature < 1) {

        // ———————————————————————
        // FEATURE 1
        // ———————————————————————

        showFeature1();

      } else if (feature.id == "codify" && currentFeature < 2) {

        // ———————————————————————
        // FEATURE 2
        // ———————————————————————

        showFeature2();

      } else if (feature.id == "drift" && currentFeature < 3) {

        // ———————————————————————
        // FEATURE 3
        // ———————————————————————

        showFeature3();

      } else if (feature.id == "policies" && currentFeature < 4) {

        // ———————————————————————
        // FEATURE 4
        // ———————————————————————

        showFeature4();

      } 

    } else {

      // ———————————————————————
      // Is not in focus
      // ———————————————————————

      feature.classList.add("half-opacity");
    }
  });
}

window.onscroll = function () {
  showCurrentFeature();
};


// setTimeout(() => {}, 100);

