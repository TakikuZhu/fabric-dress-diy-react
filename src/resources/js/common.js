
/**
 * 初始化文本组件
 * 
 * @param {*} text 文本内容
 * @param {*} fabric_cvs 画板
 * @param {*} textAlign 文本对齐方式（外部变量，实时反应）
 */
function initText(text,fabric_cvs,textAlign){
    function getTextAlign(){
        return textAlign;
    }
    let textbox = new window.fabric.Textbox(text, {
        fontSize: fabric_cvs.height,
        lockScalingFlip:true,
        lineHeight:1,
        cursorDelay:500,
        padding:0,
        textAlign:textAlign
    });
    textbox.onKeyUp=function(e){
        let lineWidth=this.measureLine(0).width;
        if(lineWidth>fabric_cvs.width){
            this.fontSize=this.fontSize*fabric_cvs.width/lineWidth
        }
        this.textAlign=getTextAlign();
        this.center()
    }
    fabric_cvs.add(textbox).setActiveObject(textbox);        

    textbox.center()
    textbox.enterEditing()

    return textbox;
}

export default {initText}