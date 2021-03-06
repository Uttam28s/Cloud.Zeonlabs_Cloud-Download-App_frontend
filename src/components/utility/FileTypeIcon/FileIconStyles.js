const type = {
  settings: { type: 'settings' },
  video: { type: 'video' },
  image: {type: 'image'},
  threeD: {type: '3d'},
  compressed: {type: 'compressed'},
  audio: {type: 'audio'},
  document: {type: 'document'},
  spreadsheet: {type: 'spreadsheet'},
  presentation: {type: 'presentation'},
  acrobat: {type: 'acrobat'},
  drive: {type: 'drive'},
  vector: {type: 'vector'},
  font: {type: 'font'},
  code: {type: 'code'},
  binary: {type: 'binary'}
}

const iconStyles = {
    '3dm': type.threeD,
    '3ds': type.threeD,
    '3g2': type.video,
    '3gp': type.video,
    '7zip': type.compressed,
    aac: type.audio,
    aep: type.video,
    ai: type.vector,
    aif: type.audio,
    aiff: type.audio,
    apk: type.settings,
    asf: type.video,
    asp: type.code,
    aspx: type.code,
    avi: type.video,
    bin: type.binary,
    bmp: type.image,
    bat: type.binary,
    c: type.code,
    cpp: type.code,
    cs: type.code,
    css: type.code,
    csv: type.spreadsheet,
    cue: type.document,
    dll: type.settings,
    dmg: type.drive,
    doc: type.document,
    docx: type.document,
    dwg: type.vector,
    dxf: type.vector,
    eot: type.font,
    eps: type.vector,
    exe: type.settings,
    flac: type.audio,
    flv: type.video,
    fnt: type.font,
    fodp: type.presentation,
    fods: type.spreadsheet,
    fodt: type.document,
    fon: type.font,
    gif: type.image,
    gz: type.compressed,
    htm: type.code,
    html: type.code,
    indd: type.document,
    ini: type.settings,
    iso: type.drive,
    java: type.code,
    jpeg: type.image,
    jpg: type.image,
    js: type.code,
    json: type.code,
    jsx: type.code,
    m4a: type.audio,
    m4v: type.video,
    max: type.threeD,
    md: type.document,
    mid: type.audio,
    mkv: type.video,
    mov: type.video,
    mp3: type.audio,
    mp4: type.video,
    mpeg: type.video,
    mpg: type.video,
    obj: type.threeD,
    odp: type.presentation,
    ods: type.spreadsheet,
    odt: type.document,
    ogg: type.audio,
    ogv: type.video,
    otf: type.font,
    pdf: type.acrobat,
    php: type.code,
    pkg: type.threeD,
    plist: type.settings,
    png: type.image,
    ppt: type.presentation,
    pptx: type.presentation,
    pr: type.video,
    ps: type.vector,
    psd: type.image,
    py: type.code,
    rar: type.compressed,
    rb: type.code,
    rm: type.video,
    rtf: type.document,
    scss: type.code,
    sitx: type.compressed,
    svg: type.vector,
    swf: type.video,
    sys: type.settings,
    tar: type.compressed,
    'tar.gz': type.compressed,
    tex: type.document,
    tif: type.image,
    tiff: type.image,
    ts: type.code,
    ttf: type.font,
    txt: type.document,
    vob: type.video,
    wav: type.audio,
    webm: type.video,
    wmv: type.video,
    woff: type.font,
    wpd: type.document,
    wps: type.document,
    xlr: type.spreadsheet,
    xls: type.spreadsheet,
    xlsx: type.spreadsheet,
    yml: type.code,
    zip: type.compressed,
    zipx: type.compressed
  }

export const geticonStyles = fileType => iconStyles[fileType] || type.drive