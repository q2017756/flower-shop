var ghpages = require('gh-pages');

ghpages.publish('dist/', {
    src: '**/*',
    branch: 'develop',
    repo: 'git@gitee.com:Ardonfu/flowers.git',
    dest: 'flower',
},function (err) {
    if(err){
        console.log(err)
    }else {
        console.log('deploy completed')
    }
});
