rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git remote add origin git@gitee.com:Lynn-zuo/apple-ui-website.git &&
git push -f -u origin master &&
cd .. &&
echo https://lynn-zuo.gitee.io/apple-ui-website/index.html