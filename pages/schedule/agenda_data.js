const agenda = [
  {
    id: 0,
    startTime: '14:30',
    endTime: '14:50',
    title: '仰望星空，探索新型存储系统技术',
    summary: '随着物联网、5G、人工智能等新技术、新平台、新应用的日新月异，正促使着数据存储技术的深度变革。特别是，新型非易失存储器件如3D XPoint、PCM等快速的发展，对构建持久性内存存储系统带来了机遇；存储接口NVMe以及网络传输RDMA的发展，正促使存储系统软件架构发生深度变革，也给存储系统的构建带来了新的挑战和机遇。特邀国内学术界专家谢长生教授莅临大会分论坛现场，与观众展开深入交流。',
    speaker: '谢长生',
    speaker_intro: '华中科技大学计算机学院教授、信息存储专委会常委、SNIA中国区专家委员会副主席',
    keywords: '性能'
  },
  {
    id: 1,
    startTime: '14:50',
    endTime: '15:20',
    title: '利用协议栈卸载实现超低延迟云盘',
    summary: '云盘的整个IO路径中，在厚重的内核IO栈和网络协议栈中的耗时占IO延迟的大部分，利用SPDK直接访问NVME设备实现内核IO栈的卸载，利用基于用户态网络协议栈的高速通信框架来实现对网络协议栈的卸载，将IO延迟做到极致。',
    speaker: '马文霜',
    speaker_intro: '腾讯云块存储技术总监',
    keywords: '性能'
  },
  {
    id: 2,
    startTime: '15:20',
    endTime: '15:50',
    title: '大数据存储上云，快人一步',
    summary: '一种标准 HDFS 访问协议、卓越性能、分层命名空间的分布式文件系统。通过方便快捷的云HDFS托管海量文件，使得用户更加关注业务本身，更加高扩展性、低成本、安全可靠的进行大数据分析。',
    speaker: '严俊明',
    speaker_intro: '腾讯云对象存储专家工程师',
    keywords: '性能'
  },
  {
    id: 3,
    startTime: '15:50',
    endTime: '16:20',
    title: '小程序+云存储，轻松响应业务需求',
    summary: '小程序是一种新的开放能力，开发者可以快速地开发一个小程序，在微信内小程序可以便捷地获取和传播，具有出色的使用体验。云存储提供高扩展、高可靠、强安全的云端服务，快速实现文件上传下载和对应的管理功能，同时支持灵活的鉴权策略，满足不同场景下的文件访问管理。当小程序遇上云存储，天生绝配珠联璧合，让您轻松响应业务需求。',
    speaker: '贺永红',
    speaker_intro: '腾讯云对象存储高级产品经理',
    keywords: '便捷，小程序'
  },
  {
    id: 4,
    startTime: '16:20',
    endTime: '16:40',
    title: '微信后台海量数据存储实践，承载千亿级并发洪峰流量',
    summary: '微信作为一个国民应用，用户数达10亿，每天的微信消息达1000+亿，朋友圈每日发表和点赞数达10+亿，每日浏览数达100+亿，开放平台，微信支付等业务活跃度持续增长。微信数据比较敏感而且数据量比较大，所以我们的存储并没有基于开源来搭建，而是自己开发了一整套存储。',
    speaker: '郑建军',
    speaker_intro: 'WXG微信事业群分布式存储专家工程师',
    keywords: '性能'
  },
  {
    id: 5,
    startTime: '16:40',
    endTime: '17:00',
    title: '多媒体存储，高效缓存和实时处理的强强结合',
    summary: '多媒体文件应用场景特殊，往往需要用户端展示时有多种不同的分辨率、码率以及格式。为最大化存储利用率、用户下载体验以及开发者使用便捷度，云存储团队配合原始存储，搭建了自研高性能大容量缓存服务以及大规模实时处理池。并针对其中应用最广的图片压缩，介绍多种技术手段让压缩性能达到最佳水平，如何实现让腾讯业务每年节省千万成本，并大幅提升下载体验。',
    speaker: '孙云清',
    speaker_intro: '腾讯TEG技术工程事业群图片业务技术副总监',
    keywords: '性能'
  }
];

module.exports = {
  day: '2019.11.06',
  conf: '存储高性能技术与实践研讨',
  location: '3F-深圳厅',
  agenda: agenda
}