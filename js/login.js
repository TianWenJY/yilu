/**
 * Created by will on 2017/9/19.
 */

//密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
var pPattern = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
function test(){
    var text="index.aspx?test.html=1&ww=2&www=3"; //
    //用户名正则，4到16位（字母，数字，下划线，减号）
    var uPattern = /^[a-zA-Z0-9_-]{4,16}$/;
    //  var   re =new RegExp("\\?(\\w{1,}=\\w{1,}&){1,}\\w{1,}=\\w{1,}");
    var result=  re.test(text);
    if(result)
    {
        alert("ok");
    }else
    {
        alert("err");
    }

}
if(navigator.appName == "Microsoft Internet Explorer"&&parseInt(navigator.appVersion.split(";")[1].replace(/[ ]/g, "").replace("MSIE",""))<9){
    alert("您的浏览器版本过低，请下载IE9及以上版本");
}