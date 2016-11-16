#!/usr/local/bin/bash

#stop pm2
#killall pm2 && echo "terminate pm2 process" || echo ""

#ck nodejs
if [ ! -L "/usr/local/bin/node" ]; then
     	cd ~ && mkdir PicStation && cd PicStation && wget http://npm.taobao.org/mirrors/node/latest-argon/node-v4.6.2-linux-x64.tar.xz \
	&& xz -d node-v4.6.2-linux-x64.tar.xz \
 	&& tar -xf node-v4.6.2-linux-x64.tar \
        && cp -a ./node-v4.6.2-linux-x64 ./node \
 	&& ln -s ~/PicStation/node/bin/node /usr/local/bin/node \
 	&& ln -s ~/PicStation/node/bin/npm /usr/local/bin/npm 
 	echo "nodejs install successful."
	rm -rf node-v4.6.2-linux-x64.tar
	rm -rf node-v4.6.2-linux-x64

fi
rm -rf ~/PicStation/source
if [ ! -d "~/a/source" ]; then
	cd ~/PicStation && mkdir source 
fi

cd ~/PicStation/source \
&& wget https://github.com/crynetsystems/PictureStation/archive/master.zip \
&& unzip -q master.zip \
&& cd ./PictureStation-master/server_site \
&& npm install  --registry=https://registry.npm.taobao.org \
&& echo "initailized successful... now launching..." \
&& node index.js \


exit 0

