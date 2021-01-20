/*!=============================================================
    Test ss40 NLN Landing page test 
    POST-RENDER script, Webtrends 2019
=============================================================*/
WTOTestss40.exec (function (Test, Config) {
  return {
    /* Configuration parameters
        -------------------------------------------------------------*/
    Config: {
      testName: 'Test ss40 NLN Landing page test ',
      developer: 'Imran',
      baseURL: '',
      cssHide: 'body {opacity: 0.00001 !important;}',
      useCTrack: false,
      useBeacon: false,
      cssPrefixClass: 'wt-ss40',
      // Required for pinning of levels via _wt.exp=FxLx
      factors: {F1: {NAME: 'Factor 1', L1: 'F1L1', L2: 'F1L2'}},
    },
    device: (function () {
      var device = 'desktop';
      var uA = navigator.userAgent;
      if (
        uA.match (
          /(?=.*(mobile|PlayStation Vita|Nokia|Opera Mini|MIDP|J2ME|CLDC|MIDP|MMP|Windows Phone OS|Windows Phone|Windows CE|GT-S5360|WiiU))/i
        ) &&
        uA.match (/^(?!.*(iPad|Tablet|KFOT|KFTT|KFJWI|KFJWA|X11))/i)
      ) {
        device = 'mobile';
      } else if (
        uA.match (/iPad/i) ||
        (uA.match (/Android/i) &&
          uA.match (
            /^(?!.*(mobile|PlayStation Vita|Nokia|Opera Mini|MIDP|J2ME|CLDC|MIDP|MMP|Windows Phone OS|Windows Phone|Windows CE|GT-S5360|X11))/i
          )) ||
        (uA.match (/windows/i) &&
          uA.match (/(?=.*(Tablet|KFOT|KFTT|KFJWI|KFJWA))/i))
      ) {
        device = 'tablet';
      }
      return device;
    }) (),

    /*/////////////////////////////////////////////////////////////
        |   ENTRY POINT TO THE TEST
        -------------------------------------------------------------*/
    Run: function () {
      Test.poll ({
        msg: 'jQuery + body polling',
        // Polling function
        when: function () {
          return (
            typeof window.jQuery === 'function' &&
            window.jQuery ('#iFooter').length
          );
        },
        // Polling callback
        then: function () {
          Test.start ('Rendering', Test.Render);
          Test.start ('Tracking', Test.Tracking);

          // SHOW PAGE
          Test.showHidePage (Config.showPage);
        },
      });
    },

    /*/////////////////////////////////////////////////////////////
        |   Executes visual page transformations
        -------------------------------------------------------------*/
    Render: function () {
      // GLOBAL RENDER CSS
      var css = new Test.CSS ({id: 'wto-css-' + Config.testAlias});
      var $ = window.jQuery;
      var console = Test.debug;

      /*  FACTOR 1
            =============================================================*/
      /*-------------------------------------------------------------
                LEVEL 1
            -------------------------------------------------------------*/
      Test.render ('F1L1', function (level) {
        var css = level.css;
        Test.debug.log ('level:');
        Test.debug.dir (level);

        // Transformations for this level to go here.
      });

      /*-------------------------------------------------------------
                LEVEL 2
            -------------------------------------------------------------*/
      Test.render ('F1L2', function (level) {
        var css = level.css;
        Test.debug.log ('level:');
        Test.debug.dir (level);

        css.add ([
          '.btncolumn { ' +
            'display: inline-block; ' +
            'border: none; ' +
            'width: 20px; ' +
            'height: 18px; ' +
            'background: transparent url("/cs/TVL/css/images/icons/imgQsClosedIcon.png"); ' +
            '}',
          '.btnGrp { ' +
            'clear: both; ' +
            'margin-bottom: 0.77em; ' +
            'overflow: hidden; ' +
            'height: 100%; ' +
            'display: inline; ' +
            '}',

          'span.defaultBtn { ' +
            'background: #08505C url(/cs/TVL/css/images/buttons/imgBtnPrimary.png) no-repeat 0 0%; ' +
            'overflow: hidden; ' +
            'padding-left: 0.154em; ' +
            'float: left; ' +
            '}',
          'ul.bull li, .contentMan ul li { ' +
            'margin-bottom: 0.385em; ' +
            'list-style: none; ' +
            'padding: 0 0 0 1.617em; ' +
            'text-indent: 0; ' +
            'background: transparent url(/cs/TVL/css/images/icons/imgBullLst.png) no-repeat 0.385em 0.539em; ' +
            '}',

          '#iPrimary a.secondaryBtn:visited, #iPrimary input.secondaryBtn:visited, #iPrimary a.defaultBtn:visited, #iPrimary a.arrowBtn:visited, #iPrimary a.previousBtn:visited, #iPrimary a.nextBtn:visited, #iPrimary h2 a:visited { ' +
            'color: #ffffff; ' +
            '}',
          'a.defaultBtn, a.arrowBtn, input.arrowBtn { ' +
            'float: left; ' +
            'background: url(/cs/TVL/css/images/buttons/imgBtnPrimary.png) no-repeat 0 0%; ' +
            'color: #fff; ' +
            'display: block; ' +
            'text-decoration: none; ' +
            'overflow: hidden; ' +
            'height: 2.464em; ' +
            'font-weight: bold; ' +
            'cursor: pointer; ' +
            '}',

          '#iPrimary .panel { ' +
            'padding: 0 20px 10px; ' +
            'height: 1%; ' +
            '}',
          '.panel { ' +
            'margin: 0 0 10px 0; ' +
            'padding: 0 10px 6px 10px; ' +
            'border: 1px solid #BED7DF; ' +
            'background: #fff; ' +
            '}',
          'span.defaultBtn { ' +
            'background: #08505C url(/cs/TVL/css/images/buttons/imgBtnPrimary.png) no-repeat 0 0%; ' +
            'overflow: hidden; ' +
            'padding-left: 0.154em; ' +
            'float: left; ' +
            '}',

          'a.defaultBtn span { ' +
            'background: #08505C url(/cs/TVL/css/images/buttons/imgBtnPrimary.png) no-repeat 100% 0%; ' +
            'margin-left: 0.23099999999999998em; ' +
            'padding: 0.616em 0.9239999999999999em 0.616em 0.77em; ' +
            'display: block; ' +
            'width: 250px; ' +
            'text-align: center; ' +
            '}',

          '.row { ' +
            'margin: 0; ' +
            'width: 100%; ' +
            'overflow: hidden; ' +
            'padding-left: 5px; ' +
            '}',
          '.column { ' +
            'float: left; ' +
            'padding: 5px; ' +
            'padding-left: 10px; ' +
            '}',

          '.ImageDetail { ' +
            'width: 35px !important; ' +
            'height: 35px !important; ' +
            'position: revert; ' +
            'float: left; ' +
            'margin-right: 15px; ' +
            'margin-bottom: 10px; ' +
            '}',
          '@media screen and (max-width: 767px) ' +
            '.ImageDetail { ' +
            'width: 25px !important; ' +
            'height: 25px !important; ' +
            'position: revert !important; ' +
            'padding: 2px !important; ' +
            'max-width: 95% !important; ' +
            'width: 100% !important; ' +
            '}',
          '@media screen and (max-width: 500px) ' +
            '.ImageDetail { ' +
            'width: 15px !important; ' +
            'height: 15px !important; ' +
            'position: revert !important; ' +
            'padding: 1px !important; ' +
            'margin-top: 0.2em !important; ' +
            '}',
        ]);

        // hide or remove div containing all text
        $ ('.data.questions').hide ();
        $ ('.btnGrp').hide ();
        $ ('#trck_dl').hide ();
        $ ('#policy').hide ();
        $ ('#adobe').hide ();

        //new text variable
        var text = document.getElementById ('first');

        text.innerHTML =
          '<p>You’ve always needed a TV Licence to watch TV channels ‘live’ (as they are broadcast). And to watch BBC programmes on iPlayer. But things are changing constantly in the world of TV.</p><p style = "padding-bottom:20px;">More online services are now scheduling live TV programmes. That means it can be hard to keep track of when you need a TV Licence, and when you don’t.</p><p style = "font-size:14px;"><strong>Make sure you’re not missing anything</strong></p><p>Before you tell us you don’t need a TV Licence, we just want to make sure there’s nothing you’ve missed, or may miss in the future.</p>';

        //image
        $ ('#first').prepend (
          '<div class="NLNBanner" style="text-align: center;"><img src="https://c.webtrends-optimize.com/acs/accounts/a425d47e-51c2-4b12-ae4d-845ea2958f95/manager/NLN-webpage-Header-577x241.jpg" width="617" height="193"></div><br>'
        );

        var greybox =
          '<div style="background-color: #f2f2f2; padding: 25px;"><p><strong>Do you or anyone in your household ever:</strong></p><p><img class="ImageDetail" src="https://c.webtrends-optimize.com/acs/accounts/a425d47e-51c2-4b12-ae4d-845ea2958f95/manager/PROJ024061-TVL-NLN-1-44x44-v0_01.png"class="number">Watch, or record TV programmes live on any channel <br>e.g. ITV, E4 or Dave - not just the BBC?</p><p><img class="ImageDetail" src="https://c.webtrends-optimize.com/acs/accounts/a425d47e-51c2-4b12-ae4d-845ea2958f95/manager/PROJ024061-TVL-NLN-2-44x44-v0_01.png"     class="number">Watch or record TV programmes live on any paid-for TV service <br>e.g. Sky, Virgin or BT?</p>   <p><img class="ImageDetail" src="https://c.webtrends-optimize.com/acs/accounts/a425d47e-51c2-4b12-ae4d-845ea2958f95/manager/PROJ024061-TVL-NLN-3-44x44-v0_01.png" class="number">Watch or stream TV programmes live on an online TV service <br>e.g. ITV Hub, All 4, YouTube, Amazon Prime Video, Now TV or Sky Go?</p> <p> <img class="ImageDetail" src="https://c.webtrends-optimize.com/acs/accounts/a425d47e-51c2-4b12-ae4d-845ea2958f95/manager/PROJ024061-TVL-NLN-4-44x44-v0_01.png"    class="number">Watch or record TV programmes live on foreign channels, via satellite  or online streaming?</p>  <p><img class="ImageDetail" src="https://c.webtrends-optimize.com/acs/accounts/a425d47e-51c2-4b12-ae4d-845ea2958f95/manager/PROJ024061-TVL-NLN-5-44x44-v0_01.png"  class="number">Download or watch any BBC programmes <br>on iPlayer?</p> <div style="margin: -0.77em -1.01em 0.77em;padding: 0.1em;border-bottom: 0.077em solid rgb(190, 215, 223);"> &nbsp;</div> <div class="row"><div class="column" style="padding-left:0px;"><p style="padding-top:5px; padding-left:0px;">This applies<br> to any devices<br> you may use.</p> </div><div class="column"> <img style="width: 30px !important; height: 40px !important; position: initial; margin-right: 15px; margin-bottom: 10px;     margin-left: 6px;" src="https://c.webtrends-optimize.com/acs/accounts/a425d47e-51c2-4b12-ae4d-845ea2958f95/manager/Phone_icon_32x56.png"><p>Phone</p> </div> <div class="column"> <img style="width: 50px !important; height: 40px !important; position: initial; margin-right: 15px; margin-bottom: 10px;     margin-left: 6px;" src="https://c.webtrends-optimize.com/acs/accounts/a425d47e-51c2-4b12-ae4d-845ea2958f95/manager/Computer_icon106x62.png"><p>Computer</p> </div><div class="column"> <img style="width: 55px !important; height: 40px !important; position: initial; margin-right: 15px; margin-bottom: 10px;     margin-left: 6px;"   src="https://c.webtrends-optimize.com/acs/accounts/a425d47e-51c2-4b12-ae4d-845ea2958f95/manager/TV-94x74.png"><p>Television</p> </div> <div class="column"><img style="width: 30px !important; height: 40px !important; position: initial; margin-right: 15px; margin-bottom: 10px;     margin-left: 6px;" src="https://c.webtrends-optimize.com/acs/accounts/a425d47e-51c2-4b12-ae4d-845ea2958f95/manager/Tablet_icon_50x68.png"> <p>Tablet</p> </div> <div class="column"> <img style="width: 55px !important; height: 40px !important; position: initial; margin-right: 15px; margin-bottom: 10px;     margin-left: 6px;" src="https://c.webtrends-optimize.com/acs/accounts/a425d47e-51c2-4b12-ae4d-845ea2958f95/manager/Console_icon_82x58.png"><p style ="padding-left:7px";>Console</p> </div> </div><div style="margin: -0.77em -1.01em 0.77em; padding: 0.1em; border-bottom: 0.077em solid rgb(190, 215, 223);"> &nbsp;</div><br><p><strong>Answered YES to any of the above?</strong> </p> <p>You <u>do</u> need a TV Licence. For just 43p a day you can enjoy the full live TV experience across all channels and TV services - and BBC programmes on iPlayer.</p> <p> <a class="defaultBtn" href="/cs/pay-for-your-tv-licence/index.app"><span>Buy a TV Licence</span></a></p><br><p><strong>Answered NO to all of the above?</strong> </p><p>Please let us know you don’t need a licence here.</p><p><a class="defaultBtn" href="/cs/no-licence-needed/index.app"><span>Declare No Licence Needed</span></a></p></div>';

        $ ('#first').after (greybox);

        // Transformations for this level to go here.
      });

      Test.status.set ('rendered');
    },

    /*/////////////////////////////////////////////////////////////
        |   Creates conversion points
        -------------------------------------------------------------*/
    Tracking: function () {
      var $ = window.jQuery;
      var console = Test.debug;

      /*=========================================================================
                PAGEVIEW
            =========================================================================*/
      Test.event.bindAfter ('pageview', function () {
        /*
                    On page load conversions or actions can go here, e.g.

                    if(userIsABusiness){
                        Test.conversion('userIsABusiness');
                    }
                */
      });

      /*=========================================================================
                CLICK-TRACKING
            =========================================================================*/
      /*
                Click tracking can go here, e.g.

                jQuery('body').on('click', '#myElm', function(){
                    Test.conversion('Click_myelm');
                });
            */
    },
  };
});
