#! /bin/bash
env=$1
rm -rf dist/*
# case $env in
#     test)
#         MODE=test
#         serverPath1=root@192.168.1.190:/usr/local/nginx/wxb-reborn/
#         passwd="'123qwe'"
#         URL=https://test.wxb.com.cn/reborn/#/guide
#         ;;
#     prd)
#         MODE=production
#         serverPath1=root@47.97.30.174:/usr/local/nginx/wxb-reborn/
#         URL=https://wxb.sczhbx.com/reborn/#/guide
#         ;;
#     *)
#         MODE=qa
#         case $env in
#             v1)
#                 apiHost=root@192.168.1.192
#                 ;;
#             v2)
#                 apiHost=root@192.168.1.189
#                 ;;
#             v3)
#                 apiHost=root@192.168.1.186
#                 ;;
#             v5)
#                 apiHost=root@192.168.1.187
#                 ;;
#             v6)
#                 apiHost=root@192.168.1.190
#                 ;;
#             v7)
#                 apiHost=root@192.168.1.191
#                 ;;

#             v8)
#                 apiHost=root@192.168.1.194
#                 ;;
#         esac
#         serverPath1=${apiHost}:/usr/local/nginx/wxb-reborn/
#         passwd="'123qwe'"
#         URL=http://qa.wxb.com.cn:8000/${env}/reborn/#/guide
# esac
serverPath1=root@192.168.1.190:/usr/local/nginx/nuxtproject/.nuxt/
# npm run build

pathArray=($serverPath1 $serverPath2 $serverPath3)
#save failed serverPath
failedArray=()
#count, use to verify success
count=0
# rsync -azvP  /Users/wangfeng/Documents/nuxt-project/nuxt.config.js root@192.168.1.190:/usr/local/nginx/nuxtproject/
# rsync -azvP  /Users/wangfeng/Documents/nuxt-project/package.json root@192.168.1.190:/usr/local/nginx/nuxtproject/
for i in ${pathArray[@]}
#for i in serverPath1, serverPath2, serverPath3
do
    if [ ! -z $i ] ; then
        if [ -x "$(command -v sshpass)" ] && [ ! -z "$passwd" ]; then
            eval "sshpass -p ${passwd} rsync -rtv .nuxt/ ${i}"
        else
            rsync -rtv .nuxt/ $i
        fi
#        判断上一步shell执行是否成功
        if [ "$?" -eq "0" ]
        then
          ((count++))
        else
          failedArray+=$i
          echo "Error while running rsync $i"
        fi
    fi
done

if [ $count -eq ${#pathArray[@]} ]
then
   echo -e "\033[46;30m 太帅了，发布成功了 \033[0m 访问地址：$URL"
else
   echo -e "\033[41;30m 😭噩耗，${#failedArray[@]}台服务器发布失败！！！(${failedArray[*]})\033[0m"
fi


