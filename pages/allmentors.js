import React from "react";
import Head from "next/head";

const Allmentors = () => {
  return (
    <div>
      <Head>
        <title>All Mentors</title>
      </Head>
      <div>
        <div
          id="app"
          data-page='{"component":"search/index","props":{"currentUser":null,"unlockFullAccessModalData":{"avatars":["https://lh3.googleusercontent.com/a-/AFdZucrwPkNLml4kIsEChfWMABM87oymKsjHoZt54zjV4Q=s96-c","/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc2MvIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b17e0833df5a1311feedca2d2ff420503b5e3ad1/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtDTEFGcEFpd0IiLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--7df52312c78b0d761c82d554707ffd70ebc97f31/Rob%20Headshot%20Square%20Small.jpeg","/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBckkvIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--3c289be677c9189ca154c2de3c833349d94c46ff/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtDTEFGcEFpd0IiLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--7df52312c78b0d761c82d554707ffd70ebc97f31/IMG_4059%20(6).jpg","/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc28vIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ca4bc52df624b4fdb70c5d5418c39fc17acb0fc6/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtDTEFGcEFpd0IiLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--7df52312c78b0d761c82d554707ffd70ebc97f31/headshot.jpeg","/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdUEvIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c080a5b42235feb8cfb055387b1aca3ad28576bd/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtDTEFGcEFpd0IiLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--7df52312c78b0d761c82d554707ffd70ebc97f31/1569902486227.jpg","/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdlZBIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--84d5d822657ce2b680475e2f2760cad3945cecc6/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtDTEFGcEFpd0IiLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--7df52312c78b0d761c82d554707ffd70ebc97f31/055955FB-6BEC-4E6C-999A-F505F61E11CE_1_201_a.jpeg","/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbzFBIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--32a0fbf6e030cba4326d2a5df6e0fabde9d4395f/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtDTEFGcEFpd0IiLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--7df52312c78b0d761c82d554707ffd70ebc97f31/nickwallen-transparent.png","/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdmhBIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--5ca90c6dd5878b26379ec2fc6ed60d615b32a973/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtDTEFGcEFpd0IiLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--7df52312c78b0d761c82d554707ffd70ebc97f31/Aditya%20_%20linkedin.jpeg","/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ1ZCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d2a5c1a50c9d3bbcb23fe36d82b396bb5c436b08/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtDTEFGcEFpd0IiLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--7df52312c78b0d761c82d554707ffd70ebc97f31/profile%20pic.jpeg","https://lh3.googleusercontent.com/a-/AFdZucqSUSFJVC0914r2JA2XBDmpqg81n6rBWUfO0syusKQ=s96-c"],"membershipPricing":{"interval":"month","intervalCount":1,"amountPerMonth":12000}},"userSignedIn":false,"filters":{"specialties":[{"label":"Advice on funding","value":"Advice on funding"},{"label":"Bootstrapping","value":"Bootstrapping"},{"label":"Building a team","value":"Building a team"},{"label":"Content marketing","value":"Content marketing"},{"label":"Conversion rate optimisation","value":"Conversion rate optimisation"},{"label":"Copywriting","value":"Copywriting"},{"label":"Customer success","value":"Customer success"},{"label":"Data science","value":"Data science"},{"label":"Design / UX","value":"Design / UX"},{"label":"Email marketing","value":"Email marketing"},{"label":"Go to market strategy","value":"Go to market strategy"},{"label":"Growth marketing","value":"Growth marketing"},{"label":"Idea validation","value":"Idea validation"},{"label":"Link building","value":"Link building"},{"label":"Marketing automation","value":"Marketing automation"},{"label":"Mindset coaching","value":"Mindset coaching"},{"label":"No-code","value":"No-code"},{"label":"PPC strategies","value":"PPC strategies"},{"label":"Pricing strategy","value":"Pricing strategy"},{"label":"Product analytics","value":"Product analytics"},{"label":"Product launches","value":"Product launches"},{"label":"Product management","value":"Product management"},{"label":"Product market fit","value":"Product market fit"},{"label":"Product marketing","value":"Product marketing"},{"label":"Productized services","value":"Productized services"},{"label":"Public relations","value":"Public relations"},{"label":"Remote work","value":"Remote work"},{"label":"Sales","value":"Sales"},{"label":"SEO","value":"SEO"},{"label":"Social media","value":"Social media"},{"label":"Technology and tools","value":"Technology and tools"},{"label":"User research","value":"User research"},{"label":"Venting frustration","value":"Venting frustration"}],"industry_specialties":[{"label":"E-Commerce","value":"E-Commerce"},{"label":"Digital Agencies","value":"Digital Agencies"},{"label":"SaaS","value":"SaaS"},{"label":"B2B","value":"B2B"},{"label":"B2C","value":"B2C"},{"label":"Real Estate","value":"Real Estate"},{"label":"Cannabis","value":"Cannabis"},{"label":"Other","value":"Other"},{"label":"Artificial Intelligence","value":"Artificial Intelligence"},{"label":"Augmented Reality","value":"Augmented Reality"},{"label":"Blockchain","value":"Blockchain"},{"label":"Cloud Computing","value":"Cloud Computing"},{"label":"Cyber Security","value":"Cyber Security"},{"label":"EdTech","value":"EdTech"},{"label":"FinTech","value":"FinTech"},{"label":"Hardware","value":"Hardware"},{"label":"HealthTech","value":"HealthTech"},{"label":"IoT","value":"IoT"},{"label":"LegalTech","value":"LegalTech"},{"label":"Machine Learning","value":"Machine Learning"},{"label":"MarTech","value":"MarTech"},{"label":"PropTech","value":"PropTech"},{"label":"TravelTech","value":"TravelTech"},{"label":"Venture Capital","value":"Venture Capital"},{"label":"D2C","value":"D2C"}],"software_specialties":[{"name":"Email Marketing Software","elements":[{"label":"AWeber","value":"a_weber","icon":"/assets/logos/a_weber-37ee6e3ccd403bca2ff2863c88bfa20b1c4f3891d8f049a6c7a027c8bb4aea74.png"},{"label":"ActiveCampaign","value":"active_campaign_em","icon":"/assets/logos/active_campaign_em-780a26be430e8e087dc474bd24fcae5eddcb066347f48feebc86a1c58e6001ae.png"},{"label":"ConstantContact","value":"constant_contact","icon":"/assets/logos/constant_contact-d5c89d3c7983ece130b9a1893d1e95b0d57f8d06cc22e271cfd4a0856775f898.png"},{"label":"ConvertKit","value":"covert_kit","icon":"/assets/logos/covert_kit-8302f42e98032d0bd50e4d0b4ecf2568060d468fa09a913ae7fffc853c45d320.png"},{"label":"Drip","value":"drip_em","icon":"/assets/logos/drip_em-eca9c6c4b9fe412c8d1c32e38714579034585a6553d46d3954d4665d10ba17d0.png"},{"label":"GetResponse","value":"get_response","icon":"/assets/logos/get_response-fec6506e439b8fdf7dce0145f562b89c78ea8e54778a5de52ef73a2132f8b63b.png"},{"label":"Infusionsoft","value":"infusionsoft_em","icon":"/assets/logos/infusionsoft_em-6bec2f8a51f5c58ea90242b64b714dd9aed67372c4dcfea39e1b7a4a306a4db3.png"},{"label":"Mailchimp","value":"mailchimp","icon":"/assets/logos/mailchimp-d77d685fdc5afc98c4ed4237f95ec62e7674a34c56b7c8c956249b872498087f.png"}]},{"name":"CRM Software","elements":[{"label":"Close","value":"close","icon":"/assets/logos/close-c40c7d5494dc9f54e7666e4fab706a697f582dba86aa99fd276bce65383eaabf.png"},{"label":"Freshworks","value":"freshworks","icon":"/assets/logos/freshworks-4aa773566f555c8287200d06f3887f2b8e8930aac7450239f278f3e8f9a2617f.png"},{"label":"Hubspot","value":"hubspot_crm","icon":"/assets/logos/hubspot_crm-8f5331831f31409df85a014d1420f914e0d8760b4eadcfaa8a73b7f5e404ed04.png"},{"label":"Insightly","value":"insightly","icon":"/assets/logos/insightly-faf636384d738117fe592a4290a254d77da984b7cc3e91d928ff473cfcc70d05.png"},{"label":"Microsoft Dynamics CRM","value":"microsoft_dynamics_crm","icon":"/assets/logos/microsoft_dynamics_crm-1dc455d21bd115dd4ff05f297de32548f9442e6c067bc87f45892a410352a6ab.png"},{"label":"Pipedrive","value":"pipedrive","icon":"/assets/logos/pipedrive-33c52ad14d473c5406fe1e607f2e8e3bcde29e0115658a3ce9ee63dc7baed8b9.png"},{"label":"Salesforce","value":"salesforce","icon":"/assets/logos/salesforce-f4abbef2eaf71c3e0774497867a9334c793385db8e5b6d2450f779e1fc286412.png"},{"label":"SugarCRM","value":"sugar_crm","icon":"/assets/logos/sugar_crm-4200f7ab203bc9cd6dac54f958a5c3541ff7d2ad5aabd81703389caf24f3f1ce.png"},{"label":"Zoho","value":"zoho","icon":"/assets/logos/zoho-c1ece9b3f433522f02c14d5e7262a8326a81c0979bd404d0dc4505bc7fb42968.png"}]},{"name":"Business Intelligence Software","elements":[{"label":"Adobe Analytics","value":"adobe_analytics","icon":"/assets/logos/adobe_analytics-eaa2131737f615a70f2cfc237dc16a290258e06ab20039d08b10cc83f62c437a.png"},{"label":"Amplitude","value":"amplitude","icon":"/assets/logos/amplitude-9d58fbce6273639b52eab0f54bc5352d9df326eba6c2b8bbdaa524d454602c27.png"},{"label":"Bare Metrics","value":"bare_metrics","icon":"/assets/logos/bare_metrics-eadf2cf07e6ae050c4ce104b19022634fb0c48898a7ac8b71bebd822731dd066.png"},{"label":"ChartMogul","value":"chart_mogul","icon":"/assets/logos/chart_mogul-2bf40f75a2dd0cd8fe8209662eb76a4cb7b98eee7f8f6f4262e1075fb64edf43.png"},{"label":"Chartbeat","value":"chartbeat","icon":"/assets/logos/chartbeat-a31f855e139237a048fd4f855866d6761c593c8965611992f417f9524c2e36e6.png"},{"label":"Dropbox","value":"databox","icon":"/assets/logos/databox-13a76541b4b4ab17bde5a8469fd5ba47666c13b94504a4ea28cfea5565bf4eab.png"},{"label":"Geckoboard","value":"geckoboard","icon":"/assets/logos/geckoboard-5e7dfe5156f67d25a4427aedd59cfa698365f2fda91c961575875e776d0304e5.png"},{"label":"Google Data Studio","value":"google_data_studio","icon":"/assets/logos/google_data_studio-eb56ccc57676db09fd52cfc5c37f8a468d06188396e54945d8262b654503c87a.png"},{"label":"Heap","value":"heap","icon":"/assets/logos/heap-0657b476675c19869368c439ad6b01a24d83bf7bc8f7a819bdbc1b727610fa2f.png"},{"label":"KISSmetrics","value":"kiss_metrics_bi","icon":"/assets/logos/kiss_metrics_bi-acc7a997103278253230a2766b49c8c5b9cf93a1d32fd1cc54a150b37cf1e1ed.png"},{"label":"Klipfolio","value":"klipfolio","icon":"/assets/logos/klipfolio-6744a0f1cd5263118cc4533bfdbd2b4ac7933d01ac5b8a86dd4d7516cf11ce5a.png"},{"label":"Looker","value":"looker","icon":"/assets/logos/looker-235a68ac205dbc16accb0f5e06ab1a840b7360037a4a228a9f72d097b891c788.png"},{"label":"Mixpanel","value":"mixpanel","icon":"/assets/logos/mixpanel-50553feb8d0020f794c01c6fdd15138843a91c6d1bfb182ae5cd2176cf5e49a2.png"},{"label":"RJmetrics","value":"rj_metrics","icon":"/assets/logos/rj_metrics-f50237ad23c1efdaf8688d7ce8e33796cda48f5b018ef8d4800e845df3ff2e19.png"},{"label":"Segment","value":"segment","icon":"/assets/logos/segment-315eabbaba989bc58e72042305b93b778fb8131ab1801f253b7a94a8fedfb492.png"},{"label":"Slemma","value":"slemma","icon":"/assets/logos/slemma-1815e73fdaecbc5bbc3a9d8fb47bf5ab17efc3cc5528dc912d007cf06c2b1651.png"},{"label":"Tableau","value":"tableau","icon":"/assets/logos/tableau-944e8770c26e62ab0ef2ef97c30ed918aa07bcdee2398c91d5a71fe083bf65eb.png"},{"label":"Supermetrics","value":"supermetrics","icon":"/assets/logos/supermetrics-ea83b6ac0efa0161ecf18ab6506aaf65f324fdad33855c1549d224e7f9f8c71d.png"}]},{"name":"SEO Tools","elements":[{"label":"Ahrefs","value":"ahrefs","icon":"/assets/logos/ahrefs-a088a5da50ee9a478bcfb926b90a47c59d89900889d915a3d4292ed6f229a600.png"},{"label":"Google Analytics","value":"google_analytics","icon":"/assets/logos/google_analytics-456b748b11e6ebf856da69f4cd8b4b78748275f4f1f688cd01e1a20a6ccd3e58.png"},{"label":"Google Webmaster Tools","value":"google_webmaster_tools","icon":"/assets/logos/google_webmaster_tools-4a9e7d62a6f1c53e83f00f318078d3dacfd72531a5936df4ce6fa7bc4febee78.png"},{"label":"KeywordTool.io","value":"keywordtool_io","icon":"/assets/logos/keywordtool_io-47418b8aefece5dc6c350fe69873da1ef7a7126a2048ce20f897f8c93c2beb9b.png"},{"label":"Moz","value":"moz","icon":"/assets/logos/moz-f7ad6066001bb0f94885cc5719d94252b495f3ce175393aa1fa40d074062ea65.png"},{"label":"Ninja Outreach","value":"ninja_outreach","icon":"/assets/logos/ninja_outreach-2990710370dc96e8b75bf33f4c0b190fce513a7eab14224a18759df5f552bb19.png"},{"label":"Outreachr","value":"outreachr","icon":"/assets/logos/outreachr-a459b8bf35eb1e824cec8b0c71ab2d477d644cbf0a7da5179a7042ece4999100.png"},{"label":"Pitchbox","value":"pitchbox","icon":"/assets/logos/pitchbox-434e69927aa11da80cb1b12ff8b4f6c003e1647bfeea08f6ea7f2818918c1377.png"},{"label":"Raven Tools","value":"raven_tools","icon":"/assets/logos/raven_tools-e9f092f2ca6e55a620aae56fca0d30a44181ffe0a08a2a67317b591297cfd490.png"},{"label":"Semrush","value":"semrush","icon":"/assets/logos/semrush-035a84c72ae0312de7c7b46ecf45f5b45047a69cb2b32eb88c474b9be9962d45.png"}]},{"name":"Marketing Automation Tools","elements":[{"label":"ActiveCampaign","value":"active_campaign_ma","icon":"/assets/logos/active_campaign_ma-780a26be430e8e087dc474bd24fcae5eddcb066347f48feebc86a1c58e6001ae.png"},{"label":"Autopilot","value":"autopilot","icon":"/assets/logos/autopilot-e00f2e7f40699d22017aa4074f30a890608a6e2fb76df9bc10014d5f8846fdca.png"},{"label":"ClickFunnels","value":"click_funnels_ma","icon":"/assets/logos/click_funnels_ma-75f5e0fad518443897185957e87bc1660d2d010e27a5070d41e584a32fe6a98e.png"},{"label":"Customer.io","value":"customer_io","icon":"/assets/logos/customer_io-c766b15137ed43181a9fea728e475234fdedc03c9aa158742a6eb7af94dbfbd5.png"},{"label":"Drift","value":"drift","icon":"/assets/logos/drift-f22ad80f219f37e707375b611fa1a34f31f95c23ad59de65662ad47e9872bbfa.png"},{"label":"Drip","value":"drip_ma","icon":"/assets/logos/drip_ma-eca9c6c4b9fe412c8d1c32e38714579034585a6553d46d3954d4665d10ba17d0.png"},{"label":"Hubspot","value":"hubspot_ma","icon":"/assets/logos/hubspot_ma-8f5331831f31409df85a014d1420f914e0d8760b4eadcfaa8a73b7f5e404ed04.png"},{"label":"Infusionsoft","value":"infusionsoft_ma","icon":"/assets/logos/infusionsoft_ma-6bec2f8a51f5c58ea90242b64b714dd9aed67372c4dcfea39e1b7a4a306a4db3.png"},{"label":"Intercom","value":"intercom","icon":"/assets/logos/intercom-c3e72430e57921797ef64c83f4d029e203472158859bfefe91c7350b80a4a6ce.png"},{"label":"ManyChat","value":"manychat","icon":"/assets/logos/manychat-cd132269a4888f9dac1820e05345ad94c6069d8a5e929985ca72e833b5f5cc69.png"},{"label":"Marketo","value":"marketo","icon":"/assets/logos/marketo-41f53879b99ceefa86b1223b80a73daa3ac956d0004080db4756e6efc6087019.png"},{"label":"Pardot","value":"pardot","icon":"/assets/logos/pardot-d06a7a4c236a75ba6389be7701422de58c9cfde32a851a2a7037ac3efa989bce.png"},{"label":"Zapier","value":"zapier","icon":"/assets/logos/zapier-bdcd027d72ac926c45244982cc6e1e8f3b8bcd6f9fab66439a07a271ec248888.png"}]},{"name":"Project Management Tools","elements":[{"label":"Asana","value":"asana","icon":"/assets/logos/asana-efe11eacf3ae7cf50148b04a530e27c53fce81726adecfac4acec0090be85ba9.png"},{"label":"Basecamp","value":"basecamp","icon":"/assets/logos/basecamp-c49b9f7b5a3172c152cc62a9ae999fe43e32a2de25b1084197a0c10c8c6800cc.png"},{"label":"JIRA","value":"jira","icon":"/assets/logos/jira-081318476ba80b67ec732852b356d5f20af52dcac82b9f070a643ddd5f6e218d.png"},{"label":"Pipefy","value":"pipefy","icon":"/assets/logos/pipefy-cc9bd5152df424a409e489f1edf1cad75486f78e1eaf06c8763da5938f985965.png"},{"label":"Pivotal Tracker","value":"pivotal_tracker","icon":"/assets/logos/pivotal_tracker-bdd17e95dfda5f1f8996c055ea1f47750216ab3a3546858293585d9f00a59518.png"},{"label":"Redmine","value":"redmine","icon":"/assets/logos/redmine-f64c47dc07a87a4bc5e69460e95764864aa0eccad9de492a992c3250ab7e69e6.png"},{"label":"Trello","value":"trello","icon":"/assets/logos/trello-350ad7590296dcdee221ed074ea4f715098c093cb60dbe265d2c5ca3b344f8a2.png"},{"label":"Wrike","value":"wrike","icon":"/assets/logos/wrike-9eb508fd6a80e0a855b11b40d9ebd4d0c058b55cd120b0744849f9b3f08cea43.png"},{"label":"Zoho Projects","value":"zoho_projects","icon":"/assets/logos/zoho_projects-8819f185de710578717f51302c0dfc6ada871bf4df568d768db4219a48b28eec.png"}]},{"name":"Pay per Click Platforms","elements":[{"label":"Adroll","value":"adroll","icon":"/assets/logos/adroll-5a2328f786151fbf4734026babe1eac57f915110594b5c7960c3e747fb51cd2b.png"},{"label":"Google Ads","value":"adwords","icon":"/assets/logos/adwords-c287622db6bca81c7cfc17f70f4709acc041062e3a2d981bd480ccf3f2611606.png"},{"label":"Bing","value":"bing","icon":"/assets/logos/bing-0aed079ada509edfcc9e7bf7ee1e1ed9c0ea46f5fef2eabf5d61e46991ac67b9.png"},{"label":"BuySellAds","value":"buysellads","icon":"/assets/logos/buysellads-57b25fa8696e128edf1c1de572d4d73b1cd2c6f7c9706f9a27907f92b9cba1b1.png"},{"label":"Facebook","value":"facebook","icon":"/assets/logos/facebook-b8f9f7f7d781f9290b5d0242236c22f738a28ebda3a4578d6b2730f691174ef9.png"},{"label":"LinkedIn","value":"linkedin","icon":"/assets/logos/linkedin-ff3bf44905f809421140e3f85eb2898fe13e80e10d2dc4ef983251cfa097874e.png"},{"label":"Perfect Audience","value":"perfect_audience","icon":"/assets/logos/perfect_audience-77861ce47d438265cb66e617021b0439ec54a39cff4d788a9f30d68e3dbb0654.png"},{"label":"Quora","value":"quora","icon":"/assets/logos/quora-345b2f0dbf2ab6e7d6bf718d3fdd0591b87755a3a4727c0a657d8cf769a5bbe4.png"},{"label":"Twitter","value":"twitter","icon":"/assets/logos/twitter-e3b5e8e4966a12e849c921e6ab94a08a72792fb88f07e36314111c529a7fdaea.png"},{"label":"Youtube","value":"youtube","icon":"/assets/logos/youtube-60eb5a036579cb565f01e59a5fea4cd547f1780076b43c3ff50907158eb2f6ac.png"}]},{"name":"Langing Page Builders","elements":[{"label":"ClickFunnels","value":"click_funnels_lpb","icon":"/assets/logos/click_funnels_lpb-75f5e0fad518443897185957e87bc1660d2d010e27a5070d41e584a32fe6a98e.png"},{"label":"Instapages","value":"instapages","icon":"/assets/logos/instapages-1e24852737f292766094ffdd55d0564b011a6ee490a4224dc5d05794fb0b322d.png"},{"label":"Leadpages","value":"leadpages","icon":"/assets/logos/leadpages-dbdde2f830a9f2e7c911fc4ed339fcb5077edabc89e5ce9006241629f01f7c8e.png"},{"label":"Unbounce","value":"unbounce","icon":"/assets/logos/unbounce-b93f22c08fdab365256ee5b52a9385333adba811ff0297a536360c100fea9c79.png"}]},{"name":"Development","elements":[{"label":"Wordpress","value":"wordpress","icon":"/assets/logos/wordpress-cda2fdde4f59cebcaa4fc166b569fc97eaf4aa5e2a20feb0a24835a4f5221300.png"},{"label":"Ruby on Rails","value":"ruby_on_rails","icon":"/assets/logos/ruby_on_rails-17842cea739e96946eb9cb56a4bb9e4535fac57539982f9ee4c109d10af486c3.png"},{"label":"Laravel","value":"laravel","icon":"/assets/logos/laravel-264fa924751ce07cc1cd8c0e50b127710935f25711d04b62b4e33aeebd2ce709.png"},{"label":"Python","value":"python","icon":"/assets/logos/python-6a164240d545e7f26b98716ec6f4180d16e2fe8beb77a4fe1da065d92cd15323.png"},{"label":"Stripe","value":"stripe","icon":"/assets/logos/stripe-814d3063efc441e087b5be7bae63133455da69dad6581b5aceaec3edcc22cbc4.png"},{"label":"NodeJS","value":"nodejs","icon":"/assets/logos/nodejs-ad6a284f2c732dd8ce0c57adb9045e5efa9debc202b5da89d8c9166fc5066d91.png"},{"label":"Linux","value":"linux","icon":"/assets/logos/linux-cb9f0e8b06a0d44c311e2328fc98aa647822d3ca0ff975948f285cca20c8a8da.png"},{"label":"PHP","value":"php","icon":"/assets/logos/php-c5e11873f2a09c76ba259723e238a43ee70063d3062f76cc62c5704c64765120.png"},{"label":"Javascript","value":"javascript","icon":"/assets/logos/javascript-3c9f749ff2355dfa5899d826ac673a33d3c5bacfa6e0fbda03d03aa0e94441a2.png"},{"label":"MySQL","value":"mysql","icon":"/assets/logos/mysql-61daf4503a846d477bde727682832899a5abc20fbc1723f24187a417e2fed9c8.png"}]},{"name":"CRO Software","elements":[{"label":"CrazyEgg","value":"crazy_egg","icon":"/assets/logos/crazy_egg-3dd12b8440e20fbb66a60ceec7501099e83b0c946f609711e3856be23f86fa39.png"},{"label":"Google Analytics Experiments","value":"google_analytics_experiments","icon":"/assets/logos/google_analytics_experiments-17754e471f529397e742300708e141b99ad4021a586fcefca488254fdd90e814.png"},{"label":"Google Tag Manager","value":"google_tag_manager","icon":"/assets/logos/google_tag_manager-ede9a2ab1fefd554fdba9090084e40a7676bf9de733c35ded235fc8670274b86.png"},{"label":"Hotjar","value":"hotjar","icon":"/assets/logos/hotjar-d5ed6a3b4715845684edc72487f8fafe026102042ca7a5dc236e695d1feb0736.png"},{"label":"Optimizely","value":"optimizely","icon":"/assets/logos/optimizely-3e9a918f6497ab19c012d35d855ade95c4a00c66e5fe26844aa7f49126a1df83.png"},{"label":"VWO","value":"vwo","icon":"/assets/logos/vwo-beedcb5e0144c68210d1e778044d4077a9e1426fd53236109bb9edd5db462814.png"}]},{"name":"Social Media Marketing Software","elements":[{"label":"Buffer","value":"buffer","icon":"/assets/logos/buffer-7c860caa545bc7ea346f4ac4582b99ed995f1d8f17ef8c8d73efac7c3dadf312.png"},{"label":"Cision","value":"cision","icon":"/assets/logos/cision-72738ee0e2f2efd595e8df684f7de316634832c9ce8cfa913465f07e9bc990d4.png"},{"label":"Hootsuite","value":"hootsuite","icon":"/assets/logos/hootsuite-62a402eb613ce4e662984bc28a493cd8adb9904638a088eb1cce0b3ac1c93364.png"},{"label":"Meet Edgar","value":"meet_edgar","icon":"/assets/logos/meet_edgar-1fca86edb2d70df6da3ab258191571534ee05572a652ff560ec39fd82ad96752.png"},{"label":"TweetDeck","value":"tweet_deck","icon":"/assets/logos/tweet_deck-e3b5e8e4966a12e849c921e6ab94a08a72792fb88f07e36314111c529a7fdaea.png"},{"label":"Zoho Social","value":"zoho_social","icon":"/assets/logos/zoho_social-c91e3236fbc44e7949778992132ed1ffc5769118fcc6aa96d8001f0dbb4d7153.png"}]}],"countries":[{"label":"Andorra","value":"AD"},{"label":"Argentina","value":"AR"},{"label":"Armenia","value":"AM"},{"label":"Australia","value":"AU"},{"label":"Austria","value":"AT"},{"label":"Belgium","value":"BE"},{"label":"Brazil","value":"BR"},{"label":"Bulgaria","value":"BG"},{"label":"Canada","value":"CA"},{"label":"Chile","value":"CL"},{"label":"Colombia","value":"CO"},{"label":"Croatia","value":"HR"},{"label":"Cyprus","value":"CY"},{"label":"Czechia","value":"CZ"},{"label":"Denmark","value":"DK"},{"label":"France","value":"FR"},{"label":"Germany","value":"DE"},{"label":"Greece","value":"GR"},{"label":"Hong Kong","value":"HK"},{"label":"Hungary","value":"HU"},{"label":"India","value":"IN"},{"label":"Indonesia","value":"ID"},{"label":"Ireland","value":"IE"},{"label":"Israel","value":"IL"},{"label":"Italy","value":"IT"},{"label":"Japan","value":"JP"},{"label":"Lithuania","value":"LT"},{"label":"Luxembourg","value":"LU"},{"label":"Malaysia","value":"MY"},{"label":"Malta","value":"MT"},{"label":"Mexico","value":"MX"},{"label":"Netherlands","value":"NL"},{"label":"New Zealand","value":"NZ"},{"label":"Nigeria","value":"NG"},{"label":"Norway","value":"NO"},{"label":"Philippines","value":"PH"},{"label":"Poland","value":"PL"},{"label":"Portugal","value":"PT"},{"label":"Romania","value":"RO"},{"label":"Russian Federation","value":"RU"},{"label":"Singapore","value":"SG"},{"label":"Slovakia","value":"SK"},{"label":"Slovenia","value":"SI"},{"label":"Spain","value":"ES"},{"label":"Sweden","value":"SE"},{"label":"Switzerland","value":"CH"},{"label":"Taiwan","value":"TW"},{"label":"Thailand","value":"TH"},{"label":"Turkey","value":"TR"},{"label":"Ukraine","value":"UA"},{"label":"United Arab Emirates","value":"AE"},{"label":"United Kingdom","value":"GB"},{"label":"United States","value":"US"},{"label":"United States Minor Outlying Islands","value":"UM"}],"languages":[{"label":"Afrikaans","value":"Afrikaans"},{"label":"Arabic","value":"Arabic"},{"label":"Armenian","value":"Armenian"},{"label":"Bengali","value":"Bengali"},{"label":"Bulgarian","value":"Bulgarian"},{"label":"Catalan","value":"Catalan"},{"label":"Chinese","value":"Chinese"},{"label":"Croatian","value":"Croatian"},{"label":"Czech","value":"Czech"},{"label":"Danish","value":"Danish"},{"label":"Dutch","value":"Dutch"},{"label":"English","value":"English"},{"label":"Filipino","value":"Filipino"},{"label":"French","value":"French"},{"label":"German","value":"German"},{"label":"Greek","value":"Greek"},{"label":"Gujarati","value":"Gujarati"},{"label":"Hebrew","value":"Hebrew"},{"label":"Hindi","value":"Hindi"},{"label":"Hungarian","value":"Hungarian"},{"label":"Italian","value":"Italian"},{"label":"Japanese","value":"Japanese"},{"label":"Kannada","value":"Kannada"},{"label":"Lithuanian","value":"Lithuanian"},{"label":"Marathi","value":"Marathi"},{"label":"Norwegian","value":"Norwegian"},{"label":"Polish","value":"Polish"},{"label":"Portuguese","value":"Portuguese"},{"label":"Romanian","value":"Romanian"},{"label":"Russian","value":"Russian"},{"label":"Sindhi","value":"Sindhi"},{"label":"Slovak","value":"Slovak"},{"label":"Spanish","value":"Spanish"},{"label":"Swedish","value":"Swedish"},{"label":"Tamil","value":"Tamil"},{"label":"Telugu","value":"Telugu"},{"label":"Thai","value":"Thai"},{"label":"Turkish","value":"Turkish"},{"label":"Ukrainian","value":"Ukrainian"},{"label":"Urdu","value":"Urdu"}],"companies":[{"label":"3dhubs","value":"3dhubs"},{"label":"Accenture","value":"Accenture"},{"label":"Adidas","value":"Adidas"},{"label":"Adobe","value":"Adobe"},{"label":"AirAsia","value":"AirAsia"},{"label":"Albacross","value":"Albacross"},{"label":"Amazon","value":"Amazon"},{"label":"Amazon Microsoft Audible Robinhood","value":"Amazon Microsoft Audible Robinhood"},{"label":"American Express","value":"American Express"},{"label":"Appsumo","value":"Appsumo"},{"label":"Asana","value":"Asana"},{"label":"Atlassian","value":"Atlassian"},{"label":"Beat","value":"Beat"},{"label":"Beducated","value":"Beducated"},{"label":"Blueheart","value":"Blueheart"},{"label":"Bonjoro","value":"Bonjoro"},{"label":"Bonsai","value":"Bonsai"},{"label":"Booking","value":"Booking"},{"label":"BounceX","value":"BounceX"},{"label":"Brainly","value":"Brainly"},{"label":"Brainware Ventures","value":"Brainware Ventures"},{"label":"Braze","value":"Braze"},{"label":"Calmerry","value":"Calmerry"},{"label":"Careem","value":"Careem"},{"label":"Carrefour","value":"Carrefour"},{"label":"Census","value":"Census"},{"label":"Cisco Systems","value":"Cisco Systems"},{"label":"Cleanly","value":"Cleanly"},{"label":"Close","value":"Close"},{"label":"Codeacademy","value":"Codeacademy"},{"label":"CoinStats","value":"CoinStats"},{"label":"Connectria","value":"Connectria"},{"label":"Conversion Rate Experts","value":"Conversion Rate Experts"},{"label":"Copyhackers","value":"Copyhackers"},{"label":"Databox","value":"Databox"},{"label":"Datadog","value":"Datadog"},{"label":"DigitalOcean","value":"DigitalOcean"},{"label":"Disney","value":"Disney"},{"label":"Doctoranytime","value":"Doctoranytime"},{"label":"Dropbox","value":"Dropbox"},{"label":"EMC","value":"EMC"},{"label":"Elastic","value":"Elastic"},{"label":"Etsy","value":"Etsy"},{"label":"EuroVPS","value":"EuroVPS"},{"label":"Eventbrite","value":"Eventbrite"},{"label":"Expedia","value":"Expedia"},{"label":"Feathr","value":"Feathr"},{"label":"Fishbrain","value":"Fishbrain"},{"label":"Fiverr","value":"Fiverr"},{"label":"Focusmate","value":"Focusmate"},{"label":"FreshBooks","value":"FreshBooks"},{"label":"G2","value":"G2"},{"label":"Gartner","value":"Gartner"},{"label":"General Electric","value":"General Electric"},{"label":"GitLab","value":"GitLab"},{"label":"GoSquared","value":"GoSquared"},{"label":"Google","value":"Google"},{"label":"Google Microsoft","value":"Google Microsoft"},{"label":"Gousto","value":"Gousto"},{"label":"GraphCMS","value":"GraphCMS"},{"label":"Groove","value":"Groove"},{"label":"Groupon","value":"Groupon"},{"label":"GrowthHackers","value":"GrowthHackers"},{"label":"Helpcrunch","value":"Helpcrunch"},{"label":"Hewlett Packard Company","value":"Hewlett Packard Company"},{"label":"HeySummit","value":"HeySummit"},{"label":"Hopin","value":"Hopin"},{"label":"Hotjar","value":"Hotjar"},{"label":"Hubstaff","value":"Hubstaff"},{"label":"IBM","value":"IBM"},{"label":"Inevent","value":"Inevent"},{"label":"Intuit","value":"Intuit"},{"label":"Invisionapp","value":"Invisionapp"},{"label":"Kajabi","value":"Kajabi"},{"label":"Ladder","value":"Ladder"},{"label":"Leadfeeder","value":"Leadfeeder"},{"label":"LinkedIn","value":"LinkedIn"},{"label":"LiveAgent","value":"LiveAgent"},{"label":"LiveChatInc","value":"LiveChatInc"},{"label":"Lyft","value":"Lyft"},{"label":"Macys","value":"Macys"},{"label":"Mars","value":"Mars"},{"label":"Meta","value":"Meta"},{"label":"Microsoft Amazon","value":"Microsoft Amazon"},{"label":"Mimo","value":"Mimo"},{"label":"Mindvalley","value":"Mindvalley"},{"label":"Modulr","value":"Modulr"},{"label":"MoneyGram","value":"MoneyGram"},{"label":"MongoDB","value":"MongoDB"},{"label":"Montblanc","value":"Montblanc"},{"label":"MyFitnessPal","value":"MyFitnessPal"},{"label":"NS1","value":"NS1"},{"label":"Namecheap","value":"Namecheap"},{"label":"Nesto","value":"Nesto"},{"label":"Nylas","value":"Nylas"},{"label":"Oracle","value":"Oracle"},{"label":"Oracle LinkedIn","value":"Oracle LinkedIn"},{"label":"Panasonic","value":"Panasonic"},{"label":"PandaDoc","value":"PandaDoc"},{"label":"Panoply","value":"Panoply"},{"label":"Peak Performance Group","value":"Peak Performance Group"},{"label":"Pepsico","value":"Pepsico"},{"label":"Pexels","value":"Pexels"},{"label":"Photomath","value":"Photomath"},{"label":"PiktoChart","value":"PiktoChart"},{"label":"Plesk","value":"Plesk"},{"label":"Preply","value":"Preply"},{"label":"Prezi","value":"Prezi"},{"label":"Red Points","value":"Red Points"},{"label":"Reply.io","value":"Reply.io"},{"label":"Respondent.io","value":"Respondent.io"},{"label":"Reuters","value":"Reuters"},{"label":"Revolut","value":"Revolut"},{"label":"Salesforce","value":"Salesforce"},{"label":"Sandboxx","value":"Sandboxx"},{"label":"Satismeter","value":"Satismeter"},{"label":"Seedstars","value":"Seedstars"},{"label":"Semrush","value":"Semrush"},{"label":"Shell","value":"Shell"},{"label":"Shopify","value":"Shopify"},{"label":"Single Grain Drip","value":"Single Grain Drip"},{"label":"Sitecore","value":"Sitecore"},{"label":"SoloLearn","value":"SoloLearn"},{"label":"Springboard","value":"Springboard"},{"label":"Striim","value":"Striim"},{"label":"SurferSEO","value":"SurferSEO"},{"label":"SurveyMonkey","value":"SurveyMonkey"},{"label":"Talkspace","value":"Talkspace"},{"label":"Taskdrive","value":"Taskdrive"},{"label":"Telepathy","value":"Telepathy"},{"label":"Tesla","value":"Tesla"},{"label":"Thinkific Shopify","value":"Thinkific Shopify"},{"label":"TomTom","value":"TomTom"},{"label":"Travelperk","value":"Travelperk"},{"label":"Typeform","value":"Typeform"},{"label":"Uber","value":"Uber"},{"label":"Unbounce","value":"Unbounce"},{"label":"Userlane","value":"Userlane"},{"label":"Userpilot","value":"Userpilot"},{"label":"Videoask","value":"Videoask"},{"label":"Vidyard","value":"Vidyard"},{"label":"Vimeo","value":"Vimeo"},{"label":"Visa","value":"Visa"},{"label":"Web4realty","value":"Web4realty"},{"label":"Webfx","value":"Webfx"},{"label":"Whereby","value":"Whereby"},{"label":"Wunderkind","value":"Wunderkind"},{"label":"Xero","value":"Xero"},{"label":"Yandex","value":"Yandex"},{"label":"Zappos","value":"Zappos"},{"label":"Zinc","value":"Zinc"},{"label":"Zynga","value":"Zynga"}]},"isUserPremium":null,"userTimezone":null,"testimonial":{"id":2,"name":"Voice123","author":"Jacob Elbaum","content":"I have been using GrowthMentor now for about 8 months. I’ve met with 17 different people amongst many different channels and strategic levels of marketing. I’d say at least 90% of my sessions have led me to make decisions which have had an impact on my business.","position":"Growth Marketer ","avatarUrl":"https://app.growthmentor.com/rails/active_storage/disk/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9JYTJWNVNTSWhNVGM1Wm1zNE1UTnlhM1o0ZG5CME4yUnNlSGxtYWpWMmFuRjNkd1k2QmtWVU9oQmthWE53YjNOcGRHbHZia2tpUzJsdWJHbHVaVHNnWm1sc1pXNWhiV1U5SW1waFkyOWlMV1ZzWW1GMWJTNXdibWNpT3lCbWFXeGxibUZ0WlNvOVZWUkdMVGduSjJwaFkyOWlMV1ZzWW1GMWJTNXdibWNHT3daVU9oRmpiMjUwWlc1MFgzUjVjR1ZKSWc1cGJXRm5aUzl3Ym1jR093WlVPaEZ6WlhKMmFXTmxYMjVoYldVNkNteHZZMkZzIiwiZXhwIjoiMjAyMi0wOC0xOVQxOTozMjoyNC42MjhaIiwicHVyIjoiYmxvYl9rZXkifX0=--aa719ff0497e4a05d32fdbf656c2a6c06dcecd25/jacob-elbaum.png","companyUrl":"https://app.growthmentor.com/rails/active_storage/disk/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9JYTJWNVNTSWhiV280TW1Oc2EzSmhielJoZUdZNGVUbHdkM2hwZG1NM1pXSnNhQVk2QmtWVU9oQmthWE53YjNOcGRHbHZia2tpVldsdWJHbHVaVHNnWm1sc1pXNWhiV1U5SWtkeWIzVndJREVnSlRJNE1TVXlPUzV3Ym1jaU95Qm1hV3hsYm1GdFpTbzlWVlJHTFRnbkowZHliM1Z3SlRJd01TVXlNQ1V5T0RFbE1qa3VjRzVuQmpzR1ZEb1JZMjl1ZEdWdWRGOTBlWEJsU1NJT2FXMWhaMlV2Y0c1bkJqc0dWRG9SYzJWeWRtbGpaVjl1WVcxbE9ncHNiMk5oYkE9PSIsImV4cCI6IjIwMjItMDgtMTlUMTk6MzI6MjQuNjMxWiIsInB1ciI6ImJsb2Jfa2V5In19--d665666bf6bf3c72242b36298348f02b4865cc4a/Group%201%20(1).png"},"searchSize":15,"lists":null,"mentorsAddedToLists":{}},"url":"/search","version":null}'
        >
          <div className="bg-white pb-4 pt-8 sm:pt-12 pentagon-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div>
                <div className="mb-6 space-x-6">
                  <a
                    href=""
                    className="text-2xl font-semibold hover:text-current"
                  >
                    {" "}
                    Mentors{" "}
                  </a>
                </div>
                <div className="flex items-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-success-500"
                  >
                    <path
                      d="M22 22l-6.344-6.344M10 18a8 8 0 100-16 8 8 0 000 16z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <input
                    placeholder="Search by name"
                    type="text"
                    className="ml-4 border-0 bg-transparent focus:bg-transparent focus:outline-none focus:ring-0"
                  />
                </div>
                <hr className="my-3 h-[3px] border-0 bg-neutral-200" />
                <button className="inline-flex cursor-pointer select-none items-center justify-center font-medium transition-colors focus:outline-none disabled:cursor-not-allowed mt-2 md:hidden text-neutral-500 border border-neutral-200 bg-transparent hover:text-neutral-500 hover:bg-neutral-100 hover:border-neutral-100 disabled:text-neutral-300 disabled:border-neutral-100 disabled:bg-transparent focus-visible:text-neutral-500 focus-visible:bg-neutral-200 focus-visible:border-neutral-200 px-4 py-2 text-[13px] rounded-full">
                  {" "}
                  Show filters{" "}
                </button>
                <div className="mt-4 h-0 w-full flex-wrap items-center overflow-hidden transition-[height] duration-500 md:flex md:h-full">
                  <div className="v-popover mr-4 mb-4">
                    <div
                      className="trigger"
                      style={{ display: "inline-block" }}
                    >
                      <button className="inline-flex w-full items-center justify-center rounded-md border py-2 px-4 text-sm text-neutral-700 transition-colors hover:border-neutral-100 hover:bg-neutral-100 focus:border-neutral-200 focus:bg-neutral-200 focus:outline-none border-neutral-200 bg-white">
                        {" "}
                        Skills{" "}
                        <span className="grow">
                          <svg
                            viewBox="0 0 8 5"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="ml-auto w-[10px] text-neutral-900 md:ml-3"
                          >
                            <path
                              d="M6.854.204L3.992 3.066 1.13.204a.667.667 0 00-.943.942L3.52 4.48a.667.667 0 00.943 0l3.333-3.334a.667.667 0 10-.942-.942z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                      </button>
                    </div>{" "}
                  </div>
                  <div className="v-popover mr-4 mb-4">
                    <div
                      className="trigger"
                      style={{ display: "inline-block" }}
                    >
                      <button className="inline-flex w-full items-center justify-center rounded-md border py-2 px-4 text-sm text-neutral-700 transition-colors hover:border-neutral-100 hover:bg-neutral-100 focus:border-neutral-200 focus:bg-neutral-200 focus:outline-none border-neutral-200 bg-white">
                        {" "}
                        Software{" "}
                        <span className="grow">
                          <svg
                            viewBox="0 0 8 5"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="ml-auto w-[10px] text-neutral-900 md:ml-3"
                          >
                            <path
                              d="M6.854.204L3.992 3.066 1.13.204a.667.667 0 00-.943.942L3.52 4.48a.667.667 0 00.943 0l3.333-3.334a.667.667 0 10-.942-.942z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                      </button>
                    </div>{" "}
                  </div>
                  <div className="v-popover mr-4 mb-4">
                    <div
                      className="trigger"
                      style={{ display: "inline-block" }}
                    >
                      <button className="inline-flex w-full items-center justify-center rounded-md border py-2 px-4 text-sm text-neutral-700 transition-colors hover:border-neutral-100 hover:bg-neutral-100 focus:border-neutral-200 focus:bg-neutral-200 focus:outline-none border-neutral-200 bg-white">
                        {" "}
                        Industry{" "}
                        <span className="grow">
                          <svg
                            viewBox="0 0 8 5"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="ml-auto w-[10px] text-neutral-900 md:ml-3"
                          >
                            <path
                              d="M6.854.204L3.992 3.066 1.13.204a.667.667 0 00-.943.942L3.52 4.48a.667.667 0 00.943 0l3.333-3.334a.667.667 0 10-.942-.942z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                      </button>
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 container mx-auto px-4 sm:px-6 lg:px-8">
            {/* <div className="mt-6 flex items-center justify-between">
              <div className="text-sm font-semibold text-neutral-400">
                {" "}
                462 mentors found{" "}
              </div>
              <div className="v-popover">
                <div className="trigger" style={{ display: "inline-block" }}>
                  <button
                    className="
      text-sm
      inline-flex
      items-center
      justify-center
      border
      border-neutral-200
      text-neutral-700
      bg-neutral-50
      py-2
      px-3
      rounded-md
      transition-colors
      hover:border-neutral-400
      focus:outline-none
      focus:bg-neutral-200
      focus:border-neutral-200
      w-full
    "
                  >
                    {" "}
                    Sort by <span className="ml-2">•</span>
                    <span className="ml-2"> Reviews </span>
                    <svg
                      viewBox="0 0 8 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[10px] ml-3 text-neutral-900"
                    >
                      <path
                        d="M6.854.204L3.992 3.066 1.13.204a.667.667 0 00-.943.942L3.52 4.48a.667.667 0 00.943 0l3.333-3.334a.667.667 0 10-.942-.942z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                </div>{" "}
              </div>
            </div> */}
            <div className="pt-6 pb-16">
              <div className="flex flex-col space-y-4">
                <div>
                  <div className="rounded-xl bg-white shadow-sm relative overflow-hidden p-5">
                    <div className="">
                      <div className="flex flex-wrap md:flex-nowrap">
                        <div className="order-1 shrink-0 grow md:mr-4 md:grow-0">
                          <a
                            href="https://app.growthmentor.com/mentors/foti-panagio"
                            rel="noreferrer"
                            target="_blank"
                          >
                            <div className="relative w-max">
                              <img
                                alt=" Foti Panagiotakopouloss avatar"
                                test_id="avatar"
                                className="rounded-full w-24 h-24"
                                data-src="https://app.growthmentor.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdDRjIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b7eefa83444a262cd8d602503228e6a6ed9c47b4/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtDTEFGcEFpd0IiLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--7df52312c78b0d761c82d554707ffd70ebc97f31/foti.png"
                                src="https://app.growthmentor.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdDRjIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b7eefa83444a262cd8d602503228e6a6ed9c47b4/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtDTEFGcEFpd0IiLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--7df52312c78b0d761c82d554707ffd70ebc97f31/foti.png"
                                lazy="loaded"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="order-3 mt-4 flex grow flex-col space-y-1 self-center md:order-2 md:mt-0">
                          <div className="flex flex-col md:flex-row md:items-center md:space-x-2">
                            <a
                              href="https://app.growthmentor.com/mentors/foti-panagio"
                              rel="noreferrer"
                              target="_blank"
                              className="order-2 mt-2 w-max hover:text-neutral-700 md:order-1 md:mt-0"
                            >
                              <h2 className="text-xl font-bold">
                                {" "}
                                Foti Panagiotakopoulos{" "}
                              </h2>
                            </a>
                          </div>
                          <div className="text-sm text-neutral-600">
                            {" "}
                            Founder @ GrowthMentor{" "}
                          </div>
                          <div className="text-xs text-neutral-400">
                            <div className="flex flex-wrap">
                              <span className="mr-4 mb-2 inline-flex items-center lg:mb-0">
                                <svg
                                  viewBox="0 0 12 16"
                                  fill="none"
                                  className="mr-2 -mt-1 h-[15px] w-[11px]"
                                >
                                  <path
                                    d="M11.5 6c0 4.5-5.5 9.5-5.5 9.5S.5 10.5.5 6a5.5 5.5 0 1111 0v0z"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M6 8.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>{" "}
                                Athens, Greece (+02:00 UTC){" "}
                              </span>
                              <span className="mr-4 mb-2 inline-flex items-center lg:mb-0">
                                <svg
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  className="mr-2 h-4 w-4 lg:mb-0"
                                >
                                  <path
                                    d="M3.707 1.85c.49.372.9.84 1.205 1.376.3.51.98 1.928.361 2.73-.7.904-2.728 1.21-2.728 2.044 0 .628.889 1.344 1.364 2.045a2.433 2.433 0 010 2.728 2.543 2.543 0 01-.882.841M13.91 3.382a16.228 16.228 0 01-3.865 1.209c-.712.05-.818-.535-1.363-1.364-.409-.622-1.364-1.4-1.364-2.045a2.1 2.1 0 01.089-.66"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M8 15.5a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M12.782 8.616c.029 2.1-2.708 4.725-4.1 4.157-1.22-.5-.36-1.458-.672-4.157C7.88 7.494 9.078 6.57 10.4 6.57a2.244 2.244 0 012.382 2.045v0z"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>{" "}
                                Greek, English{" "}
                              </span>
                              <span className="mb-2 lg:mb-0">
                                {" "}
                                from Florida, United States{" "}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="order-2 flex shrink-0 flex-col items-end md:order-3 md:w-[240px]">
                          <div className="flex items-center space-x-2 text-2xl font-semibold">
                            <div className="shrink-0">
                              <svg
                                viewBox="0 0 18 17"
                                fill="none"
                                className="h-4 w-4 text-warning-500"
                              >
                                <path
                                  d="M12.865 16.771c1.072.564 2.108-.187 1.903-1.383l-.77-4.483c.008.044 3.247-3.14 3.247-3.14.868-.846.473-2.063-.727-2.238l-4.502-.654c.044.007-1.983-4.057-1.983-4.057-.537-1.087-1.816-1.088-2.353 0L5.667 4.895c.02-.04-4.472.632-4.472.632-1.2.175-1.595 1.39-.727 2.238l3.257 3.175c-.031-.031-.78 4.448-.78 4.448-.205 1.195.83 1.948 1.903 1.383l4.027-2.117c-.04.021 3.99 2.117 3.99 2.117z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </div>
                            <span>4.99</span>
                          </div>
                          <div className="text-xs text-neutral-400">
                            {" "}
                            252 reviews / 453 sessions{" "}
                          </div>
                          <div className="mt-3 flex items-center space-x-2 font-semibold">
                            <span className="text-success-500"> Free </span>
                            <svg
                              viewBox="0 0 16 12"
                              fill="none"
                              className="h-4 w-4 text-neutral-300"
                            >
                              <path
                                d="M16 3V1c0-.6-.4-1-1-1H1C.4 0 0 .4 0 1v2h16zM0 5v6c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V5H0zm6 4H2V8h4v1zm8 0h-2V8h2v1z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <hr className="mb-4 mt-2 md:hidden" />
                      <div className="mt-4 justify-between md:flex md:space-x-6">
                        <div>
                          <p className="text-sm text-neutral-600">
                            {" "}
                            As VP of Growth at EuroVPS, I had to make a LOT of
                            decisions, daily. This got exhausting, especially if
                            I had multiple good ideas on how to do something,
                            but wasnt sure which to choose. Moments like these
                            inspired me to build GrowthMentor. Does this
                            resonate? If so, Id love to try and help you.{" "}
                          </p>
                          <div className="mt-4">
                            <ul
                              className="
      flex
      w-max
      cursor-pointer
      p-0.5
      bg-white
      text-neutral-400
      text-xs
      rounded-full
      border
      border-neutral-200
    "
                            >
                              <li>
                                <button
                                  className="
          uppercase
          py-2
          px-3
          rounded-full
          font-semibold
          antialiased
          focus:bg-neutral-50 focus:outline-none
         bg-neutral-100 text-neutral-500"
                                >
                                  {" "}
                                  Expertise{" "}
                                </button>
                              </li>
                              <li>
                                <button
                                  className="
          uppercase
          py-2
          px-3
          rounded-full
          font-semibold
          antialiased
          focus:bg-neutral-50 focus:outline-none
        "
                                >
                                  {" "}
                                  Industry{" "}
                                </button>
                              </li>
                              <li>
                                <button
                                  className="
          uppercase
          py-2
          px-3
          rounded-full
          font-semibold
          antialiased
          focus:bg-neutral-50 focus:outline-none
        "
                                >
                                  {" "}
                                  Tools{" "}
                                </button>
                              </li>
                            </ul>
                            <div style={{}}>
                              <div className="mt-4">
                                <span
                                  className="
    inline-flex
    items-center
    text-center
    font-medium
    rounded-full
    select-none
    border
   mr-1 mb-1 text-indigo-500 bg-white border-indigo-100 text-xs py-[6px] px-3 has-tooltip"
                                  data-original-title="null"
                                >
                                  {" "}
                                  Idea validation{" "}
                                </span>
                                <span
                                  className="
    inline-flex
    items-center
    text-center
    font-medium
    rounded-full
    select-none
    border
   mr-1 mb-1 text-indigo-500 bg-white border-indigo-100 text-xs py-[6px] px-3 has-tooltip"
                                  data-original-title="null"
                                >
                                  {" "}
                                  Growth marketing{" "}
                                </span>
                                <span
                                  className="
    inline-flex
    items-center
    text-center
    font-medium
    rounded-full
    select-none
    border
   mr-1 mb-1 text-indigo-500 bg-white border-indigo-100 text-xs py-[6px] px-3 has-tooltip"
                                  data-original-title="null"
                                >
                                  {" "}
                                  Building a team{" "}
                                </span>
                                <span
                                  className="
    inline-flex
    items-center
    text-center
    font-medium
    rounded-full
    select-none
    border
   mr-1 mb-1 text-indigo-500 bg-white border-indigo-100 text-xs py-[6px] px-3 has-tooltip"
                                  data-original-title="null"
                                >
                                  {" "}
                                  Marketing automation{" "}
                                </span>
                                <span
                                  className="
    inline-flex
    items-center
    text-center
    font-medium
    rounded-full
    select-none
    border
   mr-1 mb-1 text-indigo-500 bg-white border-indigo-100 text-xs py-[6px] px-3 has-tooltip"
                                  data-original-title="null"
                                >
                                  {" "}
                                  Conversion rate optimisation{" "}
                                </span>
                                <span
                                  className="
    inline-flex
    items-center
    text-center
    font-medium
    rounded-full
    select-none
    border
   mr-1 mb-1 text-indigo-500 bg-white border-indigo-100 text-xs py-[6px] px-3 has-tooltip"
                                  data-original-title="null"
                                >
                                  {" "}
                                  SEO{" "}
                                </span>
                                <span
                                  className="
    inline-flex
    items-center
    text-center
    font-medium
    rounded-full
    select-none
    border
   mr-1 mb-1 text-indigo-500 bg-white border-indigo-100 text-xs py-[6px] px-3 has-tooltip"
                                  data-original-title="null"
                                >
                                  {" "}
                                  Venting frustration{" "}
                                </span>
                                <span
                                  className="
    inline-flex
    items-center
    text-center
    font-medium
    rounded-full
    select-none
    border
   mr-1 mb-1 text-indigo-500 bg-white border-indigo-100 text-xs py-[6px] px-3 has-tooltip"
                                  data-original-title="null"
                                >
                                  {" "}
                                  Content marketing{" "}
                                </span>
                                <span
                                  className="
    inline-flex
    items-center
    text-center
    font-medium
    rounded-full
    select-none
    border
   mr-1 mb-1 text-indigo-500 bg-white border-indigo-100 text-xs py-[6px] px-3 has-tooltip"
                                  data-original-title="null"
                                >
                                  {" "}
                                  Product market fit{" "}
                                </span>
                              </div>
                            </div>
                            <div style={{ display: "none" }}>
                              <div className="mt-4">
                                <span
                                  className="
    inline-flex
    items-center
    text-center
    font-medium
    rounded-full
    select-none
    border
   mr-1 mb-1 text-indigo-500 bg-white border-indigo-100 text-xs py-[6px] px-3 has-tooltip"
                                  data-original-title="null"
                                >
                                  {" "}
                                  Cloud Computing{" "}
                                </span>
                              </div>
                            </div>
                            <div style={{ display: "none" }}>
                              <div className="mt-4">
                                <span
                                  className="
    inline-flex
    items-center
    text-center
    font-medium
    rounded-full
    select-none
    border
   mr-1 mb-1 text-indigo-500 bg-white border-indigo-100 text-xs py-[6px] px-3 has-tooltip"
                                  data-original-title="null"
                                >
                                  {" "}
                                  Mixpanel{" "}
                                </span>
                                <span
                                  className="
    inline-flex
    items-center
    text-center
    font-medium
    rounded-full
    select-none
    border
   mr-1 mb-1 text-indigo-500 bg-white border-indigo-100 text-xs py-[6px] px-3 has-tooltip"
                                  data-original-title="null"
                                >
                                  {" "}
                                  Google Webmaster Tools{" "}
                                </span>
                                <span
                                  className="
    inline-flex
    items-center
    text-center
    font-medium
    rounded-full
    select-none
    border
   mr-1 mb-1 text-indigo-500 bg-white border-indigo-100 text-xs py-[6px] px-3 has-tooltip"
                                  data-original-title="null"
                                >
                                  {" "}
                                  Google Ads{" "}
                                </span>
                                <span
                                  className="
    inline-flex
    items-center
    text-center
    font-medium
    rounded-full
    select-none
    border
   mr-1 mb-1 text-indigo-500 bg-white border-indigo-100 text-xs py-[6px] px-3 has-tooltip"
                                  data-original-title="null"
                                >
                                  {" "}
                                  Ahrefs{" "}
                                </span>
                                <span
                                  className="
    inline-flex
    items-center
    text-center
    font-medium
    rounded-full
    select-none
    border
   mr-1 mb-1 text-indigo-500 bg-white border-indigo-100 text-xs py-[6px] px-3 has-tooltip"
                                  data-original-title="null"
                                >
                                  {" "}
                                  Zapier{" "}
                                </span>
                                <span
                                  className="
    inline-flex
    items-center
    text-center
    font-medium
    rounded-full
    select-none
    border
   mr-1 mb-1 text-indigo-500 bg-white border-indigo-100 text-xs py-[6px] px-3 has-tooltip"
                                  data-original-title="null"
                                >
                                  {" "}
                                  Facebook{" "}
                                </span>
                                <span
                                  className="
    inline-flex
    items-center
    text-center
    font-medium
    rounded-full
    select-none
    border
   mr-1 mb-1 text-indigo-500 bg-white border-indigo-100 text-xs py-[6px] px-3 has-tooltip"
                                  data-original-title="null"
                                >
                                  {" "}
                                  Drip{" "}
                                </span>
                                <span
                                  className="
    inline-flex
    items-center
    text-center
    font-medium
    rounded-full
    select-none
    border
   mr-1 mb-1 text-indigo-500 bg-white border-indigo-100 text-xs py-[6px] px-3 has-tooltip"
                                  data-original-title="null"
                                >
                                  {" "}
                                  Close{" "}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr className="my-4 md:hidden" />
                        <div className="shrink-0 md:w-[240px]">
                          <div className="flex items-center rounded-md border border-neutral-100 bg-neutral-50 p-4 text-xs text-neutral-700">
                            <svg
                              viewBox="0 0 15 15"
                              fill="none"
                              className="mr-2 h-4 w-4 shrink-0"
                            >
                              <path
                                d="M13.242 1.172h-.703V0h-1.172v1.172H3.633V0H2.46v1.172h-.703A1.76 1.76 0 000 2.93v10.312C0 14.212.789 15 1.758 15h11.484A1.76 1.76 0 0015 13.242V2.93a1.76 1.76 0 00-1.758-1.758zm.586 12.07a.587.587 0 01-.586.586H1.758a.587.587 0 01-.586-.586V5.508h12.656v7.734zm0-8.906H1.172V2.93c0-.323.263-.586.586-.586h.703v1.172h1.172V2.344h7.734v1.172h1.172V2.344h.703c.323 0 .586.263.586.586v1.406z"
                                fill="currentColor"
                              ></path>
                              <path
                                d="M3.398 6.738H2.227V7.91h1.171V6.738zm2.344 0H4.57V7.91h1.172V6.738zm2.344 0H6.914V7.91h1.172V6.738zm2.344 0H9.258V7.91h1.172V6.738zm2.343 0h-1.171V7.91h1.171V6.738zM3.398 9.082H2.227v1.172h1.171V9.082zm2.344 0H4.57v1.172h1.172V9.082zm2.344 0H6.914v1.172h1.172V9.082zm2.344 0H9.258v1.172h1.172V9.082zm-7.032 2.344H2.227v1.172h1.171v-1.172zm2.344 0H4.57v1.172h1.172v-1.172zm2.344 0H6.914v1.172h1.172v-1.172zm2.344 0H9.258v1.172h1.172v-1.172zm2.343-2.344h-1.171v1.172h1.171V9.082z"
                                fill="currentColor"
                              ></path>
                            </svg>
                            <span>Not available in the next 30 days</span>
                          </div>
                          <div className="mt-4 flex flex-col space-y-2">
                            <div className="inline-block">
                              <button className="inline-flex cursor-pointer select-none items-center justify-center font-medium transition-colors focus:outline-none disabled:cursor-not-allowed text-white bg-indigo-500 border border-indigo-500 hover:text-white hover:bg-indigo-400 hover:border-indigo-400 disabled:text-indigo-300 disabled:bg-indigo-200 disabled:border-indigo-200 focus-visible:text-white focus-visible:bg-indigo-500 focus-visible:border-indigo-500 px-4 py-2 text-sm w-full rounded-full">
                                {" "}
                                Request a Call{" "}
                              </button>
                            </div>
                            <a
                              href="https://app.growthmentor.com/mentors/foti-panagio"
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex cursor-pointer select-none items-center justify-center font-medium transition-colors focus:outline-none disabled:cursor-not-allowed text-indigo-500 border border-indigo-200 bg-white hover:text-indigo-500 hover:bg-indigo-50 hover:border-indigo-50 disabled:text-indigo-300 disabled:border-indigo-100 disabled:bg-white focus-visible:text-indigo-500 focus-visible:bg-indigo-100 focus-visible:border-indigo-100 px-4 py-2 text-sm w-full rounded-full"
                            >
                              {" "}
                              View Profile{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="rounded-xl bg-white shadow-sm relative overflow-hidden p-5">
                    <div className="">
                      <div className="flex flex-wrap md:flex-nowrap">
                        <div className="order-1 shrink-0 grow md:mr-4 md:grow-0">
                          <a
                            href="https://app.growthmentor.com/mentors/dani-hart"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <div className="relative w-max">
                              <img
                                alt="Dani Harts avatar"
                                test_id="avatar"
                                className="rounded-full w-24 h-24"
                                data-src="https://app.growthmentor.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBallCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--bbd76b16b24775997897c06b1609cf45d12dd25b/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtDTEFGcEFpd0IiLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--78d607fe2e1db2da0c7004453e1c6d43e53bb331/Dani-Hart.jpg"
                                src="https://app.growthmentor.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBallCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--bbd76b16b24775997897c06b1609cf45d12dd25b/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtDTEFGcEFpd0IiLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--78d607fe2e1db2da0c7004453e1c6d43e53bb331/Dani-Hart.jpg"
                                lazy="loaded"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="order-3 mt-4 flex grow flex-col space-y-1 self-center md:order-2 md:mt-0">
                          <div className="flex flex-col md:flex-row md:items-center md:space-x-2">
                            <a
                              href="https://app.growthmentor.com/mentors/dani-hart"
                              target="_blank"
                              rel="noreferrer"
                              className="order-2 mt-2 w-max hover:text-neutral-700 md:order-1 md:mt-0"
                            >
                              <h2 className="text-xl font-bold"> Dani Hart </h2>
                            </a>
                          </div>
                          <div className="text-sm text-neutral-600">
                            {" "}
                            Sustainable Growth Practitioner, Yoga Teacher{" "}
                          </div>
                          <div className="text-xs text-neutral-400">
                            <div className="flex flex-wrap">
                              <span className="mr-4 mb-2 inline-flex items-center lg:mb-0">
                                <svg
                                  viewBox="0 0 12 16"
                                  fill="none"
                                  className="mr-2 -mt-1 h-[15px] w-[11px]"
                                >
                                  <path
                                    d="M11.5 6c0 4.5-5.5 9.5-5.5 9.5S.5 10.5.5 6a5.5 5.5 0 1111 0v0z"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M6 8.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>{" "}
                                Baltimore, MD, United States (-05:00 UTC){" "}
                              </span>
                              <span className="mr-4 mb-2 inline-flex items-center lg:mb-0">
                                <svg
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  className="mr-2 h-4 w-4 lg:mb-0"
                                >
                                  <path
                                    d="M3.707 1.85c.49.372.9.84 1.205 1.376.3.51.98 1.928.361 2.73-.7.904-2.728 1.21-2.728 2.044 0 .628.889 1.344 1.364 2.045a2.433 2.433 0 010 2.728 2.543 2.543 0 01-.882.841M13.91 3.382a16.228 16.228 0 01-3.865 1.209c-.712.05-.818-.535-1.363-1.364-.409-.622-1.364-1.4-1.364-2.045a2.1 2.1 0 01.089-.66"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M8 15.5a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M12.782 8.616c.029 2.1-2.708 4.725-4.1 4.157-1.22-.5-.36-1.458-.672-4.157C7.88 7.494 9.078 6.57 10.4 6.57a2.244 2.244 0 012.382 2.045v0z"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>{" "}
                                English{" "}
                              </span>
                              <span className="mb-2 lg:mb-0">
                                {" "}
                                from Baltimore, MD, United States{" "}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="order-2 flex shrink-0 flex-col items-end md:order-3 md:w-[240px]">
                          <div className="flex items-center space-x-2 text-2xl font-semibold">
                            <div className="shrink-0">
                              <svg
                                viewBox="0 0 18 17"
                                fill="none"
                                className="h-4 w-4 text-warning-500"
                              >
                                <path
                                  d="M12.865 16.771c1.072.564 2.108-.187 1.903-1.383l-.77-4.483c.008.044 3.247-3.14 3.247-3.14.868-.846.473-2.063-.727-2.238l-4.502-.654c.044.007-1.983-4.057-1.983-4.057-.537-1.087-1.816-1.088-2.353 0L5.667 4.895c.02-.04-4.472.632-4.472.632-1.2.175-1.595 1.39-.727 2.238l3.257 3.175c-.031-.031-.78 4.448-.78 4.448-.205 1.195.83 1.948 1.903 1.383l4.027-2.117c-.04.021 3.99 2.117 3.99 2.117z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </div>
                            <span>4.97</span>
                          </div>
                          <div className="text-xs text-neutral-400">
                            {" "}
                            206 reviews / 314 sessions{" "}
                          </div>
                          <div className="mt-3 flex items-center space-x-2 font-semibold">
                            <span className="text-success-500"> Free </span>
                            <svg
                              viewBox="0 0 16 12"
                              fill="none"
                              className="h-4 w-4 text-neutral-300"
                            >
                              <path
                                d="M16 3V1c0-.6-.4-1-1-1H1C.4 0 0 .4 0 1v2h16zM0 5v6c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V5H0zm6 4H2V8h4v1zm8 0h-2V8h2v1z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <hr className="mb-4 mt-2 md:hidden" />
                      <div className="mt-4 justify-between md:flex md:space-x-6">
                        <div>
                          <p className="text-sm text-neutral-600">
                            {" "}
                            Feeling burned out? After years of working with
                            CEOs, Heads of Growth, &amp; Marketers from all over
                            the world, I have stories &amp; experience ready to
                            support you on your growth journey. Ill help you
                            identify your biggest opportunities for sustainable
                            growth for yourself and/or your business.{" "}
                          </p>
                          <div className="mt-4">
                            <ul
                              className="
      flex
      w-max
      cursor-pointer
      p-0.5
      bg-white
      text-neutral-400
      text-xs
      rounded-full
      border
      border-neutral-200
    "
                            >
                              <li>
                                <button
                                  className="
          uppercase
          py-2
          px-3
          rounded-full
          font-semibold
          antialiased
          focus:bg-neutral-50 focus:outline-none
         bg-neutral-100 text-neutral-500"
                                >
                                  {" "}
                                  Expertise{" "}
                                </button>
                              </li>
                              <li>
                                <button
                                  className="
          uppercase
          py-2
          px-3
          rounded-full
          font-semibold
          antialiased
          focus:bg-neutral-50 focus:outline-none
        "
                                >
                                  {" "}
                                  Industry{" "}
                                </button>
                              </li>
                              <li>
                                <button
                                  className="
          uppercase
          py-2
          px-3
          rounded-full
          font-semibold
          antialiased
          focus:bg-neutral-50 focus:outline-none
        "
                                >
                                  {" "}
                                  Tools{" "}
                                </button>
                              </li>
                            </ul>
                            <div style={{}}>
                              <div className="mt-4">
                                <span
                                  className="
    inline-flex
    items-center
    text-center
    font-medium
    rounded-full
    select-none
    border
   mr-1 mb-1 text-indigo-500 bg-white border-indigo-100 text-xs py-[6px] px-3 has-tooltip"
                                  data-original-title="null"
                                >
                                  {" "}
                                  Email marketing{" "}
                                </span>
                                <span
                                  className="
    inline-flex
    items-center
    text-center
    font-medium
    rounded-full
    select-none
    border
   mr-1 mb-1 text-indigo-500 bg-white border-indigo-100 text-xs py-[6px] px-3 has-tooltip"
                                  data-original-title="null"
                                >
                                  {" "}
                                  Building a team{" "}
                                </span>
                                <span
                                  className="
    inline-flex
    items-center
    text-center
    font-medium
    rounded-full
    select-none
    border
   mr-1 mb-1 text-indigo-500 bg-white border-indigo-100 text-xs py-[6px] px-3 has-tooltip"
                                  data-original-title="null"
                                >
                                  {" "}
                                  Mindset coaching{" "}
                                </span>
                                <span
                                  className="
    inline-flex
    items-center
    text-center
    font-medium
    rounded-full
    select-none
    border
   mr-1 mb-1 text-indigo-500 bg-white border-indigo-100 text-xs py-[6px] px-3 has-tooltip"
                                  data-original-title="null"
                                >
                                  {" "}
                                  Venting frustration{" "}
                                </span>
                                <span
                                  className="
    inline-flex
    items-center
    text-center
    font-medium
    rounded-full
    select-none
    border
   mr-1 mb-1 text-indigo-500 bg-white border-indigo-100 text-xs py-[6px] px-3 has-tooltip"
                                  data-original-title="null"
                                >
                                  {" "}
                                  Remote work{" "}
                                </span>
                                <span
                                  className="
    inline-flex
    items-center
    text-center
    font-medium
    rounded-full
    select-none
    border
   mr-1 mb-1 text-indigo-500 bg-white border-indigo-100 text-xs py-[6px] px-3 has-tooltip"
                                  data-original-title="null"
                                >
                                  {" "}
                                  Product market fit{" "}
                                </span>
                              </div>
                            </div>
                            <div style={{ display: "none" }}>
                              <div className="mt-4">
                                <span
                                  className="
    inline-flex
    items-center
    text-center
    font-medium
    rounded-full
    select-none
    border
   mr-1 mb-1 text-indigo-500 bg-white border-indigo-100 text-xs py-[6px] px-3"
                                >
                                  {" "}
                                  B2C{" "}
                                </span>
                                <span
                                  className="
    inline-flex
    items-center
    text-center
    font-medium
    rounded-full
    select-none
    border
   mr-1 mb-1 text-indigo-500 bg-white border-indigo-100 text-xs py-[6px] px-3"
                                >
                                  {" "}
                                  Digital Agencies{" "}
                                </span>
                                <span
                                  className="
    inline-flex
    items-center
    text-center
    font-medium
    rounded-full
    select-none
    border
   mr-1 mb-1 text-indigo-500 bg-white border-indigo-100 text-xs py-[6px] px-3"
                                >
                                  {" "}
                                  Other{" "}
                                </span>
                                <span
                                  className="
    inline-flex
    items-center
    text-center
    font-medium
    rounded-full
    select-none
    border
   mr-1 mb-1 text-indigo-500 bg-white border-indigo-100 text-xs py-[6px] px-3"
                                >
                                  {" "}
                                  B2B{" "}
                                </span>
                                <span
                                  className="
    inline-flex
    items-center
    text-center
    font-medium
    rounded-full
    select-none
    border
   mr-1 mb-1 text-indigo-500 bg-white border-indigo-100 text-xs py-[6px] px-3"
                                >
                                  {" "}
                                  Real Estate{" "}
                                </span>
                                <span
                                  className="
    inline-flex
    items-center
    text-center
    font-medium
    rounded-full
    select-none
    border
   mr-1 mb-1 text-indigo-500 bg-white border-indigo-100 text-xs py-[6px] px-3"
                                >
                                  {" "}
                                  Cannabis{" "}
                                </span>
                              </div>
                            </div>
                            <div style={{ display: "none" }}>
                              <div className="mt-4">
                                <span
                                  className="
    inline-flex
    items-center
    text-center
    font-medium
    rounded-full
    select-none
    border
   mr-1 mb-1 text-indigo-500 bg-white border-indigo-100 text-xs py-[6px] px-3 has-tooltip"
                                  data-original-title="null"
                                >
                                  {" "}
                                  Hubspot{" "}
                                </span>
                                <span
                                  className="
    inline-flex
    items-center
    text-center
    font-medium
    rounded-full
    select-none
    border
   mr-1 mb-1 text-indigo-500 bg-white border-indigo-100 text-xs py-[6px] px-3 has-tooltip"
                                  data-original-title="null"
                                >
                                  {" "}
                                  ConstantContact{" "}
                                </span>
                                <span
                                  className="
    inline-flex
    items-center
    text-center
    font-medium
    rounded-full
    select-none
    border
   mr-1 mb-1 text-indigo-500 bg-white border-indigo-100 text-xs py-[6px] px-3 has-tooltip"
                                  data-original-title="null"
                                >
                                  {" "}
                                  Mailchimp{" "}
                                </span>
                                <span
                                  className="
    inline-flex
    items-center
    text-center
    font-medium
    rounded-full
    select-none
    border
   mr-1 mb-1 text-indigo-500 bg-white border-indigo-100 text-xs py-[6px] px-3 has-tooltip"
                                  data-original-title="null"
                                >
                                  {" "}
                                  Marketo{" "}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr className="my-4 md:hidden" />
                        <div className="shrink-0 md:w-[240px]">
                          <div className="flex items-center rounded-md border border-neutral-100 bg-neutral-50 p-4 text-xs text-neutral-700">
                            <svg
                              viewBox="0 0 15 15"
                              fill="none"
                              className="mr-2 h-4 w-4 shrink-0"
                            >
                              <path
                                d="M13.242 1.172h-.703V0h-1.172v1.172H3.633V0H2.46v1.172h-.703A1.76 1.76 0 000 2.93v10.312C0 14.212.789 15 1.758 15h11.484A1.76 1.76 0 0015 13.242V2.93a1.76 1.76 0 00-1.758-1.758zm.586 12.07a.587.587 0 01-.586.586H1.758a.587.587 0 01-.586-.586V5.508h12.656v7.734zm0-8.906H1.172V2.93c0-.323.263-.586.586-.586h.703v1.172h1.172V2.344h7.734v1.172h1.172V2.344h.703c.323 0 .586.263.586.586v1.406z"
                                fill="currentColor"
                              ></path>
                              <path
                                d="M3.398 6.738H2.227V7.91h1.171V6.738zm2.344 0H4.57V7.91h1.172V6.738zm2.344 0H6.914V7.91h1.172V6.738zm2.344 0H9.258V7.91h1.172V6.738zm2.343 0h-1.171V7.91h1.171V6.738zM3.398 9.082H2.227v1.172h1.171V9.082zm2.344 0H4.57v1.172h1.172V9.082zm2.344 0H6.914v1.172h1.172V9.082zm2.344 0H9.258v1.172h1.172V9.082zm-7.032 2.344H2.227v1.172h1.171v-1.172zm2.344 0H4.57v1.172h1.172v-1.172zm2.344 0H6.914v1.172h1.172v-1.172zm2.344 0H9.258v1.172h1.172v-1.172zm2.343-2.344h-1.171v1.172h1.171V9.082z"
                                fill="currentColor"
                              ></path>
                            </svg>
                            <span>
                              {" "}
                              Next available - Tuesday, August 23, 2022 10:30 PM
                              IST{" "}
                            </span>
                          </div>
                          <div className="mt-4 flex flex-col space-y-2">
                            <div className="inline-block">
                              <button className="inline-flex cursor-pointer select-none items-center justify-center font-medium transition-colors focus:outline-none disabled:cursor-not-allowed text-white bg-indigo-500 border border-indigo-500 hover:text-white hover:bg-indigo-400 hover:border-indigo-400 disabled:text-indigo-300 disabled:bg-indigo-200 disabled:border-indigo-200 focus-visible:text-white focus-visible:bg-indigo-500 focus-visible:border-indigo-500 px-4 py-2 text-sm w-full rounded-full">
                                {" "}
                                Request a Call{" "}
                              </button>
                            </div>
                            <a
                              href="https://app.growthmentor.com/mentors/dani-hart"
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex cursor-pointer select-none items-center justify-center font-medium transition-colors focus:outline-none disabled:cursor-not-allowed text-indigo-500 border border-indigo-200 bg-white hover:text-indigo-500 hover:bg-indigo-50 hover:border-indigo-50 disabled:text-indigo-300 disabled:border-indigo-100 disabled:bg-white focus-visible:text-indigo-500 focus-visible:bg-indigo-100 focus-visible:border-indigo-100 px-4 py-2 text-sm w-full rounded-full"
                            >
                              {" "}
                              View Profile{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="rounded-xl bg-white shadow-sm relative overflow-hidden p-5">
                    <div className="">
                      <div className="flex flex-wrap md:flex-nowrap">
                        <div className="order-1 shrink-0 grow md:mr-4 md:grow-0">
                          <a
                            href="https://app.growthmentor.com/mentors/austin-mullins-a5bcd2f8-8559-4fe8-9b00-b2684a459afc"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <div className="relative w-max">
                              <img
                                alt="Austin Mullinss avatar"
                                test_id="avatar"
                                className="rounded-full w-24 h-24"
                                data-src="https://app.growthmentor.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbGdFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d54699b390e4deb93b85f8d41e2c14edfd1e6392/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtDTEFGcEFpd0IiLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--78d607fe2e1db2da0c7004453e1c6d43e53bb331/Profile.jpg"
                                src="https://app.growthmentor.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbGdFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d54699b390e4deb93b85f8d41e2c14edfd1e6392/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtDTEFGcEFpd0IiLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--78d607fe2e1db2da0c7004453e1c6d43e53bb331/Profile.jpg"
                                lazy="loaded"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="order-3 mt-4 flex grow flex-col space-y-1 self-center md:order-2 md:mt-0">
                          <div className="flex flex-col md:flex-row md:items-center md:space-x-2">
                            <a
                              href="https://app.growthmentor.com/mentors/austin-mullins-a5bcd2f8-8559-4fe8-9b00-b2684a459afc"
                              target="_blank"
                              rel="noreferrer"
                              className="order-2 mt-2 w-max hover:text-neutral-700 md:order-1 md:mt-0"
                            >
                              <h2 className="text-xl font-bold">
                                {" "}
                                Austin Mullins{" "}
                              </h2>
                            </a>
                          </div>
                          <div className="text-sm text-neutral-600">
                            {" "}
                            Enterprise SEO &amp; Content Marketer With a Passion
                            for SaaS, eLearning, eCommerce | Founder @
                            Conversion Media{" "}
                          </div>
                          <div className="text-xs text-neutral-400">
                            <div className="flex flex-wrap">
                              <span className="mr-4 mb-2 inline-flex items-center lg:mb-0">
                                <svg
                                  viewBox="0 0 12 16"
                                  fill="none"
                                  className="mr-2 -mt-1 h-[15px] w-[11px]"
                                >
                                  <path
                                    d="M11.5 6c0 4.5-5.5 9.5-5.5 9.5S.5 10.5.5 6a5.5 5.5 0 1111 0v0z"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M6 8.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>{" "}
                                Lexington, KY, United States (-05:00 UTC){" "}
                              </span>
                              <span className="mr-4 mb-2 inline-flex items-center lg:mb-0">
                                <svg
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  className="mr-2 h-4 w-4 lg:mb-0"
                                >
                                  <path
                                    d="M3.707 1.85c.49.372.9.84 1.205 1.376.3.51.98 1.928.361 2.73-.7.904-2.728 1.21-2.728 2.044 0 .628.889 1.344 1.364 2.045a2.433 2.433 0 010 2.728 2.543 2.543 0 01-.882.841M13.91 3.382a16.228 16.228 0 01-3.865 1.209c-.712.05-.818-.535-1.363-1.364-.409-.622-1.364-1.4-1.364-2.045a2.1 2.1 0 01.089-.66"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M8 15.5a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M12.782 8.616c.029 2.1-2.708 4.725-4.1 4.157-1.22-.5-.36-1.458-.672-4.157C7.88 7.494 9.078 6.57 10.4 6.57a2.244 2.244 0 012.382 2.045v0z"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>{" "}
                                English{" "}
                              </span>
                              <span className="mb-2 lg:mb-0">
                                {" "}
                                from Huntington, WV, United States{" "}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="order-2 flex shrink-0 flex-col items-end md:order-3 md:w-[240px]">
                          <div className="flex items-center space-x-2 text-2xl font-semibold">
                            <div className="shrink-0">
                              <svg
                                viewBox="0 0 18 17"
                                fill="none"
                                className="h-4 w-4 text-warning-500"
                              >
                                <path
                                  d="M12.865 16.771c1.072.564 2.108-.187 1.903-1.383l-.77-4.483c.008.044 3.247-3.14 3.247-3.14.868-.846.473-2.063-.727-2.238l-4.502-.654c.044.007-1.983-4.057-1.983-4.057-.537-1.087-1.816-1.088-2.353 0L5.667 4.895c.02-.04-4.472.632-4.472.632-1.2.175-1.595 1.39-.727 2.238l3.257 3.175c-.031-.031-.78 4.448-.78 4.448-.205 1.195.83 1.948 1.903 1.383l4.027-2.117c-.04.021 3.99 2.117 3.99 2.117z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </div>
                            <span>4.98</span>
                          </div>
                          <div className="text-xs text-neutral-400">
                            {" "}
                            200 reviews / 299 sessions{" "}
                          </div>
                          <div className="mt-3 flex items-center space-x-2 font-semibold">
                            <span className="text-success-500"> Free </span>
                            <svg
                              viewBox="0 0 16 12"
                              fill="none"
                              className="h-4 w-4 text-neutral-300"
                            >
                              <path
                                d="M16 3V1c0-.6-.4-1-1-1H1C.4 0 0 .4 0 1v2h16zM0 5v6c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V5H0zm6 4H2V8h4v1zm8 0h-2V8h2v1z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <hr className="mb-4 mt-2 md:hidden" />
                      <div className="mt-4 justify-between md:flex md:space-x-6">
                        <div>
                          <p className="text-sm text-neutral-600">
                            {" "}
                            Lets grow your traffic, leads, and revenue - I focus
                            on helping innovative companies leverage Content
                            Marketing &amp; SEO to achieve sustainable growth.{" "}
                          </p>
                          <div className="mt-4">
                            <ul
                              className="
      flex
      w-max
      cursor-pointer
      p-0.5
      bg-white
      text-neutral-400
      text-xs
      rounded-full
      border
      border-neutral-200
    "
                            >
                              <li>
                                <button
                                  className="
          uppercase
          py-2
          px-3
          rounded-full
          font-semibold
          antialiased
          focus:bg-neutral-50 focus:outline-none
         bg-neutral-100 text-neutral-500"
                                >
                                  {" "}
                                  Expertise{" "}
                                </button>
                              </li>
                              <li>
                                <button
                                  className="
          uppercase
          py-2
          px-3
          rounded-full
          font-semibold
          antialiased
          focus:bg-neutral-50 focus:outline-none
        "
                                >
                                  {" "}
                                  Industry{" "}
                                </button>
                              </li>
                              <li>
                                <button
                                  className="
          uppercase
          py-2
          px-3
          rounded-full
          font-semibold
          antialiased
          focus:bg-neutral-50 focus:outline-none
        "
                                >
                                  {" "}
                                  Tools{" "}
                                </button>
                              </li>
                            </ul>
                            <div style={{}}>
                              <div className="mt-4">
                                <span
                                  className="
    inline-flex
    items-center
    text-center
    font-medium
    rounded-full
    select-none
    border
   mr-1 mb-1 text-indigo-500 bg-white border-indigo-100 text-xs py-[6px] px-3 has-tooltip"
                                  data-original-title="null"
                                >
                                  {" "}
                                  No-code{" "}
                                </span>
                                <span
                                  className="
    inline-flex
    items-center
    text-center
    font-medium
    rounded-full
    select-none
    border
   mr-1 mb-1 text-indigo-500 bg-white border-indigo-100 text-xs py-[6px] px-3 has-tooltip"
                                  data-original-title="null"
                                >
                                  {" "}
                                  Sales{" "}
                                </span>
                                <span
                                  className="
    inline-flex
    items-center
    text-center
    font-medium
    rounded-full
    select-none
    border
   mr-1 mb-1 text-indigo-500 bg-white border-indigo-100 text-xs py-[6px] px-3 has-tooltip"
                                  data-original-title="null"
                                >
                                  {" "}
                                  Link building{" "}
                                </span>
                                <span
                                  className="
    inline-flex
    items-center
    text-center
    font-medium
    rounded-full
    select-none
    border
   mr-1 mb-1 text-indigo-500 bg-white border-indigo-100 text-xs py-[6px] px-3 has-tooltip"
                                  data-original-title="null"
                                >
                                  {" "}
                                  SEO{" "}
                                </span>
                                <span
                                  className="
    inline-flex
    items-center
    text-center
    font-medium
    rounded-full
    select-none
    border
   mr-1 mb-1 text-indigo-500 bg-white border-indigo-100 text-xs py-[6px] px-3 has-tooltip"
                                  data-original-title="null"
                                >
                                  {" "}
                                  Content marketing{" "}
                                </span>
                              </div>
                            </div>
                            <div style={{ display: "none" }}>
                              <div className="mt-4">
                                <span
                                  className="
    inline-flex
    items-center
    text-center
    font-medium
    rounded-full
    select-none
    border
   mr-1 mb-1 text-indigo-500 bg-white border-indigo-100 text-xs py-[6px] px-3"
                                >
                                  {" "}
                                  B2C{" "}
                                </span>
                                <span
                                  className="
    inline-flex
    items-center
    text-center
    font-medium
    rounded-full
    select-none
    border
   mr-1 mb-1 text-indigo-500 bg-white border-indigo-100 text-xs py-[6px] px-3"
                                >
                                  {" "}
                                  B2B{" "}
                                </span>
                                <span
                                  className="
    inline-flex
    items-center
    text-center
    font-medium
    rounded-full
    select-none
    border
   mr-1 mb-1 text-indigo-500 bg-white border-indigo-100 text-xs py-[6px] px-3"
                                >
                                  {" "}
                                  SaaS{" "}
                                </span>
                                <span
                                  className="
    inline-flex
    items-center
    text-center
    font-medium
    rounded-full
    select-none
    border
   mr-1 mb-1 text-indigo-500 bg-white border-indigo-100 text-xs py-[6px] px-3"
                                >
                                  {" "}
                                  Digital Agencies{" "}
                                </span>
                                <span
                                  className="
    inline-flex
    items-center
    text-center
    font-medium
    rounded-full
    select-none
    border
   mr-1 mb-1 text-indigo-500 bg-white border-indigo-100 text-xs py-[6px] px-3"
                                >
                                  {" "}
                                  E-Commerce{" "}
                                </span>
                              </div>
                            </div>
                            <div style={{ display: "none" }}>
                              <div className="mt-4">
                                <span
                                  className="
    inline-flex
    items-center
    text-center
    font-medium
    rounded-full
    select-none
    border
   mr-1 mb-1 text-indigo-500 bg-white border-indigo-100 text-xs py-[6px] px-3 has-tooltip"
                                  data-original-title="null"
                                >
                                  {" "}
                                  Intercom{" "}
                                </span>
                                <span
                                  className="
    inline-flex
    items-center
    text-center
    font-medium
    rounded-full
    select-none
    border
   mr-1 mb-1 text-indigo-500 bg-white border-indigo-100 text-xs py-[6px] px-3 has-tooltip"
                                  data-original-title="null"
                                >
                                  {" "}
                                  Zapier{" "}
                                </span>
                                <span
                                  className="
    inline-flex
    items-center
    text-center
    font-medium
    rounded-full
    select-none
    border
   mr-1 mb-1 text-indigo-500 bg-white border-indigo-100 text-xs py-[6px] px-3 has-tooltip"
                                  data-original-title="null"
                                >
                                  {" "}
                                  Mailchimp{" "}
                                </span>
                                <span
                                  className="
    inline-flex
    items-center
    text-center
    font-medium
    rounded-full
    select-none
    border
   mr-1 mb-1 text-indigo-500 bg-white border-indigo-100 text-xs py-[6px] px-3 has-tooltip"
                                  data-original-title="null"
                                >
                                  {" "}
                                  Pipedrive{" "}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr className="my-4 md:hidden" />
                        <div className="shrink-0 md:w-[240px]">
                          <div className="flex items-center rounded-md border border-neutral-100 bg-neutral-50 p-4 text-xs text-neutral-700">
                            <svg
                              viewBox="0 0 15 15"
                              fill="none"
                              className="mr-2 h-4 w-4 shrink-0"
                            >
                              <path
                                d="M13.242 1.172h-.703V0h-1.172v1.172H3.633V0H2.46v1.172h-.703A1.76 1.76 0 000 2.93v10.312C0 14.212.789 15 1.758 15h11.484A1.76 1.76 0 0015 13.242V2.93a1.76 1.76 0 00-1.758-1.758zm.586 12.07a.587.587 0 01-.586.586H1.758a.587.587 0 01-.586-.586V5.508h12.656v7.734zm0-8.906H1.172V2.93c0-.323.263-.586.586-.586h.703v1.172h1.172V2.344h7.734v1.172h1.172V2.344h.703c.323 0 .586.263.586.586v1.406z"
                                fill="currentColor"
                              ></path>
                              <path
                                d="M3.398 6.738H2.227V7.91h1.171V6.738zm2.344 0H4.57V7.91h1.172V6.738zm2.344 0H6.914V7.91h1.172V6.738zm2.344 0H9.258V7.91h1.172V6.738zm2.343 0h-1.171V7.91h1.171V6.738zM3.398 9.082H2.227v1.172h1.171V9.082zm2.344 0H4.57v1.172h1.172V9.082zm2.344 0H6.914v1.172h1.172V9.082zm2.344 0H9.258v1.172h1.172V9.082zm-7.032 2.344H2.227v1.172h1.171v-1.172zm2.344 0H4.57v1.172h1.172v-1.172zm2.344 0H6.914v1.172h1.172v-1.172zm2.344 0H9.258v1.172h1.172v-1.172zm2.343-2.344h-1.171v1.172h1.171V9.082z"
                                fill="currentColor"
                              ></path>
                            </svg>
                            <span>
                              {" "}
                              Next available - Tuesday, August 23, 2022 10:00 PM
                              IST{" "}
                            </span>
                          </div>
                          <div className="mt-4 flex flex-col space-y-2">
                            <div className="inline-block">
                              <button className="inline-flex cursor-pointer select-none items-center justify-center font-medium transition-colors focus:outline-none disabled:cursor-not-allowed text-white bg-indigo-500 border border-indigo-500 hover:text-white hover:bg-indigo-400 hover:border-indigo-400 disabled:text-indigo-300 disabled:bg-indigo-200 disabled:border-indigo-200 focus-visible:text-white focus-visible:bg-indigo-500 focus-visible:border-indigo-500 px-4 py-2 text-sm w-full rounded-full">
                                {" "}
                                Request a Call{" "}
                              </button>
                            </div>
                            <a
                              href="https://app.growthmentor.com/mentors/austin-mullins-a5bcd2f8-8559-4fe8-9b00-b2684a459afc"
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex cursor-pointer select-none items-center justify-center font-medium transition-colors focus:outline-none disabled:cursor-not-allowed text-indigo-500 border border-indigo-200 bg-white hover:text-indigo-500 hover:bg-indigo-50 hover:border-indigo-50 disabled:text-indigo-300 disabled:border-indigo-100 disabled:bg-white focus-visible:text-indigo-500 focus-visible:bg-indigo-100 focus-visible:border-indigo-100 px-4 py-2 text-sm w-full rounded-full"
                            >
                              {" "}
                              View Profile{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="rounded-xl bg-neutral-900 p-6 text-white shadow-sm mt-4">
                    <div className="space-y-6">
                      <svg
                        viewBox="0 0 52 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-14"
                      >
                        <path
                          d="M12.31 32c-.997 0-3.298-1.579-6.903-4.736C1.802 24.105 0 21.95 0 20.794c0-1.232 3.336-5.006 10.009-11.321C16.68 3.158 20.4 0 21.169 0c.23 0 .728.385 1.495 1.155.843.77 1.265 1.387 1.265 1.849 0 .385-1.802 4.004-5.407 10.859 4.218 3.311 6.328 5.583 6.328 6.816 0 1.232-1.841 3.427-5.523 6.585C15.646 30.42 13.307 32 12.31 32zm27.15 0c-.997 0-3.298-1.579-6.903-4.736-3.604-3.158-5.407-5.314-5.407-6.47 0-1.232 3.337-5.006 10.01-11.321C43.831 3.158 47.551 0 48.318 0c.23 0 .728.385 1.495 1.155.844.77 1.266 1.387 1.266 1.849 0 .385-1.803 4.004-5.407 10.859C49.89 17.174 52 19.446 52 20.679c0 1.232-1.84 3.427-5.522 6.585C42.797 30.42 40.458 32 39.46 32z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <blockquote className="text-lg font-semibold lg:text-2xl">
                        {" "}
                        “I have been using GrowthMentor now for about 8 months.
                        Ive met with 17 different people amongst many different
                        channels and strategic levels of marketing. Id say at
                        least 90% of my sessions have led me to make decisions
                        which have had an impact on my business.”{" "}
                      </blockquote>
                      <div className="flex flex-col justify-between space-y-6 lg:flex-row lg:items-center lg:space-y-0">
                        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-3">
                          <div className="flex items-center space-x-3">
                            <div className="relative w-max shrink-0">
                              <img
                                alt="Voice123s avatar"
                                test_id="avatar"
                                className="rounded-full w-12 h-12"
                                data-src="https://app.growthmentor.com/rails/active_storage/disk/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9JYTJWNVNTSWhNVGM1Wm1zNE1UTnlhM1o0ZG5CME4yUnNlSGxtYWpWMmFuRjNkd1k2QmtWVU9oQmthWE53YjNOcGRHbHZia2tpUzJsdWJHbHVaVHNnWm1sc1pXNWhiV1U5SW1waFkyOWlMV1ZzWW1GMWJTNXdibWNpT3lCbWFXeGxibUZ0WlNvOVZWUkdMVGduSjJwaFkyOWlMV1ZzWW1GMWJTNXdibWNHT3daVU9oRmpiMjUwWlc1MFgzUjVjR1ZKSWc1cGJXRm5aUzl3Ym1jR093WlVPaEZ6WlhKMmFXTmxYMjVoYldVNkNteHZZMkZzIiwiZXhwIjoiMjAyMi0wOC0xOVQxOTozMjoyNC42MjhaIiwicHVyIjoiYmxvYl9rZXkifX0=--aa719ff0497e4a05d32fdbf656c2a6c06dcecd25/jacob-elbaum.png"
                                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                lazy="loading"
                              />
                            </div>
                            <div>
                              <div className="font-bold">Jacob Elbaum</div>
                              <div className="text-sm font-medium text-neutral-400">
                                {" "}
                                Growth Marketer{" "}
                              </div>
                            </div>
                          </div>
                          <img
                            src="https://app.growthmentor.com/rails/active_storage/disk/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9JYTJWNVNTSWhiV280TW1Oc2EzSmhielJoZUdZNGVUbHdkM2hwZG1NM1pXSnNhQVk2QmtWVU9oQmthWE53YjNOcGRHbHZia2tpVldsdWJHbHVaVHNnWm1sc1pXNWhiV1U5SWtkeWIzVndJREVnSlRJNE1TVXlPUzV3Ym1jaU95Qm1hV3hsYm1GdFpTbzlWVlJHTFRnbkowZHliM1Z3SlRJd01TVXlNQ1V5T0RFbE1qa3VjRzVuQmpzR1ZEb1JZMjl1ZEdWdWRGOTBlWEJsU1NJT2FXMWhaMlV2Y0c1bkJqc0dWRG9SYzJWeWRtbGpaVjl1WVcxbE9ncHNiMk5oYkE9PSIsImV4cCI6IjIwMjItMDgtMTlUMTk6MzI6MjQuNjMxWiIsInB1ciI6ImJsb2Jfa2V5In19--d665666bf6bf3c72242b36298348f02b4865cc4a/Group%201%20(1).png"
                            alt="Jacob Elbaums company logo"
                            className="w-24"
                          />
                        </div>
                        <div>
                          <button className="inline-flex items-center rounded-full border-2 border-white bg-transparent px-4 py-3 text-xl font-semibold text-white focus:outline-none focus-visible:ring focus-visible:ring-neutral-500">
                            {" "}
                            Get Started{" "}
                            <svg
                              viewBox="0 0 8 12"
                              fill="none"
                              className="ml-2 h-4 w-4"
                            >
                              <path
                                d="M2 11.4L.6 10l4-4-4-4L2 .6 7.4 6 2 11.4z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allmentors;
