查找24小时内被修改文件

find ./ -mtime 0 -name "\*.php\*"

查找72小时内新增文件,具有777权限

find ./ -ctime -2 -name "\*.php\*" -perm 777

所有进程信息,查找pid

ps aux |grep 123 |grep -v grep

调用端口的pid

lsof -i 端口号

最后登录,信息

last -i |grep -v 0.0.0.0

实施登陆查看

w

异常用户排查

cat /etc/passwd

grep "0:0" /etc/passwd

ls -l /etc/passwd

awk -F: '$3==0 {print $1}' /etc/passwd

awk -F: '$2=="!" {print $1}' /etc/shadow

计划任务排查

crontab -l

开机自启动

/etc/init.d

取消开机自启动

update-rc.d 程序 disable

修改path

export PATH=$PATH:/bin  (本次有效,/etc/profile ;/home/.bashrc永久生效)

