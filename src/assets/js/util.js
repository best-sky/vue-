
export default {

  //获取选择月份有多少天
  mGetDate(year, month){
    var d = new Date(year, month, 0);
    return d.getDate();
  }
}