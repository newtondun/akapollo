var APP_ID = 'j1tglqxrmcpoqptr7pbabfhhelna1jte5pmcp91qt0esscxd',
    APP_KEY = 'jvtn9svhjywkntu0fp30cx7i59q3tyztbyjov7xgvrc0p5vc',
    MASTER_KEY = 'ix4xjtdy90yxalua6nw9kakdbqxztf4kbx2th8kyozaycuow';

AV._initialize(APP_ID, APP_KEY, MASTER_KEY);
AV.Cloud.useMasterKey();

require("cloud/index");
require('cloud/defines/AVSignUp');
require('cloud/defines/AVSignIn');
