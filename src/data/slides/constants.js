const WHAT_DOES_THIS_MEAN = '<span style="color: #CB4444">What does this</span> mean<span style="color: #CB4444">?</span>';
const WHAT_DOES_THIS_MEAN_6 = '<span style="color: #CB4444">What does</span> 息息相关 <span style="color: #CB4444">mean?</span>';
const WHAT_DOES_THIS_MEAN_6_TD = '<span style="color: #CB4444">What does</span> 息息相關 <span style="color: #CB4444">mean?</span>';
const WHAT_DOES_THIS_MEAN_7 = '<span style="color: #CB4444">According to the speaker, how might new technology influence our</span> lives<span style="color: #CB4444">?</span>';
const WHAT_DOES_THIS_MEAN_8 = '<span style="color: #CB4444">Why did the speaker said</span> "治疗癌症就是小菜一碟了"<span style="color: #CB4444">?</span>';

const syncData = [
    // first line, 11
    {'start':0.000,'end':0.410,'text': '这些'},
    {'start':0.410,'end':0.820,'text': '高新'},
    {'start':0.820,'end':1.230,'text': '技术'},
    {'start':1.230,'end':1.640,'text': '的应'},
    {'start':1.640,'end':2.050,'text': '用都'},
    {'start':2.050,'end':2.460,'text': '是跟'},
    {'start':2.460,'end':2.870,'text': '我们'},
    {'start':2.870,'end':3.280,'text': '的生'},
    {'start':3.280,'end':3.690,'text': '活息'},
    {'start':3.690,'end':4.100,'text': '息相'},
    {'start':4.100,'end':4.510,'text': '关的'},
    {'start':4.100,'end':4.510,'text': '。'},

    // second line, 15
    {'start':4.510,'end':4.920,'text': '等到'},
    {'start':4.920,'end':5.330,'text': '科学'},
    {'start':5.330,'end':5.740,'text': '家们'},
    {'start':5.740,'end':6.150,'text': '找到'},
    {'start':6.150,'end':6.560,'text': '细胞'},
    {'start':6.560,'end':6.970,'text': '衰老'},
    {'start':6.970,'end':7.380,'text': '的原'},
    {'start':7.380,'end':7.790,'text': '因,'},
    {'start':7.790,'end':8.200,'text': ' 说'},
    {'start':8.200,'end':8.610,'text': '不定'},
    {'start':8.610,'end':9.020,'text': '我们'},
    {'start':9.020,'end':9.430,'text': '就能'},
    {'start':9.430,'end':9.840,'text': '活到'},
    {'start':9.840,'end':10.250,'text': '两百'},
    {'start':10.250,'end':10.660,'text': '岁了'},
    {'start':10.250,'end':10.660,'text': '。'},

    // third line, 13
    {'start':10.660,'end':11.070,'text': '而且'},
    {'start':11.070,'end':11.480,'text': '以后'},
    {'start':11.480,'end':11.890,'text': '或许'},
    {'start':11.890,'end':12.300,'text': '可以'},
    {'start':12.300,'end':12.710,'text': '克隆'},
    {'start':12.710,'end':13.120,'text': '人体'},
    {'start':13.120,'end':13.530,'text': '器官,'},
    {'start':13.530,'end':13.940,'text': '治'},
    {'start':13.940,'end':14.350,'text': '疗癌'},
    {'start':14.350,'end':14.760,'text': '症就'},
    {'start':14.760,'end':15.170,'text': '是小'},
    {'start':15.170,'end':15.580,'text': '菜一'},
    {'start':15.580,'end':15.990,'text': '碟了'},
    {'start':15.580,'end':15.990,'text': '。'},
];

const syncDataTD = [
    // first line, 11
    {'start':0.000,'end':0.410,'text': '這些'},
    {'start':0.410,'end':0.820,'text': '高新'},
    {'start':0.820,'end':1.230,'text': '技術'},
    {'start':1.230,'end':1.640,'text': '的應'},
    {'start':1.640,'end':2.050,'text': '用都'},
    {'start':2.050,'end':2.460,'text': '是跟'},
    {'start':2.460,'end':2.870,'text': '我們'},
    {'start':2.870,'end':3.280,'text': '的生'},
    {'start':3.280,'end':3.690,'text': '活息'},
    {'start':3.690,'end':4.100,'text': '息相'},
    {'start':4.100,'end':4.510,'text': '關的'},
    {'start':4.100,'end':4.510,'text': '。'},

    // second line, 15
    {'start':4.510,'end':4.920,'text': '等到'},
    {'start':4.920,'end':5.330,'text': '科學'},
    {'start':5.330,'end':5.740,'text': '家們'},
    {'start':5.740,'end':6.150,'text': '找到'},
    {'start':6.150,'end':6.560,'text': '細胞'},
    {'start':6.560,'end':6.970,'text': '衰老'},
    {'start':6.970,'end':7.380,'text': '的原'},
    {'start':7.380,'end':7.790,'text': '因,'},
    {'start':7.790,'end':8.200,'text': '說不'},
    {'start':8.200,'end':8.610,'text': '定我'},
    {'start':8.610,'end':9.020,'text': '們就'},
    {'start':9.020,'end':9.430,'text': '能活'},
    {'start':9.430,'end':9.840,'text': '到兩'},
    {'start':9.840,'end':10.250,'text': '百歲'},
    {'start':10.250,'end':10.660,'text': '了'},
    {'start':10.250,'end':10.660,'text': '。'},

    // third line, 13
    {'start':10.660,'end':11.070,'text': '而且'},
    {'start':11.070,'end':11.480,'text': '以後'},
    {'start':11.480,'end':11.890,'text': '或許'},
    {'start':11.890,'end':12.300,'text': '可以'},
    {'start':12.300,'end':12.710,'text': '克隆'},
    {'start':12.710,'end':13.120,'text': '人體'},
    {'start':13.120,'end':13.530,'text': '器官,'},
    {'start':13.530,'end':13.940,'text': ' 治'},
    {'start':13.940,'end':14.350,'text': '療癌'},
    {'start':14.350,'end':14.760,'text': '症就'},
    {'start':14.760,'end':15.170,'text': '是小'},
    {'start':15.170,'end':15.580,'text': '菜一'},
    {'start':15.580,'end':15.990,'text': '碟了'},
    {'start':15.580,'end':15.990,'text': '。'},
];

const syncDataPinyin = [
    // first line, 11
    {'start':0.000,'end':0.410,'text': 'Zhèxiē'},
    {'start':0.410,'end':0.820,'text': 'gāoxīn'},
    {'start':0.820,'end':1.230,'text': 'jìshù'},
    {'start':1.230,'end':1.640,'text': 'de yìngyòng'},
    {'start':1.640,'end':2.050,'text': 'dōu shì'},
    {'start':2.050,'end':2.460,'text': 'gēn'},
    {'start':2.460,'end':2.870,'text': 'wǒmen'},
    {'start':2.870,'end':3.280,'text': 'de'},
    {'start':3.280,'end':3.690,'text': 'shēnghuó'},
    {'start':3.690,'end':4.100,'text': 'xīxīxiāngguān'},
    {'start':4.100,'end':4.510,'text': 'de'},
    {'start':4.100,'end':4.510,'text': '.'},

    // second line, 15
    {'start':4.510,'end':4.920,'text': 'Děngdào'},
    {'start':4.920,'end':5.330,'text': 'kēxuéjiā'},
    {'start':5.330,'end':5.740,'text': 'men'},
    {'start':5.740,'end':6.150,'text': 'zhǎodào'},
    {'start':6.150,'end':6.560,'text': 'xìbāo'},
    {'start':6.560,'end':6.970,'text': 'shuāilǎo de'},
    {'start':6.970,'end':7.380,'text': 'yuányīn,'},
    {'start':7.380,'end':7.790,'text': 'shuōbudìng'},
    {'start':7.790,'end':8.200,'text': 'wǒmen'},
    {'start':8.200,'end':8.610,'text': 'jiù'},
    {'start':8.610,'end':9.020,'text': 'néng'},
    {'start':9.020,'end':9.430,'text': 'huódào'},
    {'start':9.430,'end':9.840,'text': 'liǎngbǎi'},
    {'start':9.840,'end':10.250,'text': 'suì'},
    {'start':10.250,'end':10.660,'text': 'le'},
    {'start':10.250,'end':10.660,'text': '.'},

    // third line, 13
    {'start':10.660,'end':11.070,'text': 'érqiě'},
    {'start':11.070,'end':11.480,'text': 'yǐhòu'},
    {'start':11.480,'end':11.890,'text': 'huòxǔ'},
    {'start':11.890,'end':12.300,'text': 'kěyǐ'},
    {'start':12.300,'end':12.710,'text': 'kèlóng'},
    {'start':12.710,'end':13.120,'text': 'réntǐ'},
    {'start':13.120,'end':13.530,'text': 'qìguān,'},
    {'start':13.530,'end':13.940,'text': 'zhìliáo'},
    {'start':13.940,'end':14.350,'text': 'áizhèng'},
    {'start':14.350,'end':14.760,'text': 'jiùshì'},
    {'start':14.760,'end':15.170,'text': 'xiǎocàiyīdié'},
    {'start':15.170,'end':15.580,'text': 'le.'},
    {'start':15.580,'end':15.990,'text': ''},
    {'start':15.580,'end':15.990,'text': ''},
];

export {
    WHAT_DOES_THIS_MEAN,
    WHAT_DOES_THIS_MEAN_6,
    WHAT_DOES_THIS_MEAN_6_TD,
    WHAT_DOES_THIS_MEAN_7,
    WHAT_DOES_THIS_MEAN_8,
    syncData,
    syncDataTD,
    syncDataPinyin
};