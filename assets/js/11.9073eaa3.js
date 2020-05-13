(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{499:function(s,a,e){"use strict";e.r(a);var t=e(1),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"_1-拉取镜像，选择对应版本，默认latest，此处以-6-7-2-版本为例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-拉取镜像，选择对应版本，默认latest，此处以-6-7-2-版本为例"}},[s._v("#")]),s._v(" 1. 拉取镜像，选择对应版本，默认latest，此处以 "),e("strong",[s._v("6.7.2")]),s._v(" 版本为例")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker pull elasticsearch:6.7.2\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"_2-启动容器，进行端口映射，通过-v-参数进行挂载，如配置文件，持久化，插件。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-启动容器，进行端口映射，通过-v-参数进行挂载，如配置文件，持久化，插件。"}},[s._v("#")]),s._v(" 2. 启动容器，进行端口映射，通过 "),e("strong",[s._v("-v")]),s._v(" 参数进行挂载，如配置文件，持久化，插件。")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker run -d --name elasticsearch --hostname elasticsearch -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("9200")]),s._v(":9200 -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("9300")]),s._v(":9300 -e "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"discovery.type=single-node"')]),s._v(" elasticsearch:6.7.2\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"配置文件挂载，配置文件必须存在："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置文件挂载，配置文件必须存在："}},[s._v("#")]),s._v(" 配置文件挂载，配置文件必须存在：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("-v D:/dockerMount/elasticsearch/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("elasticsearch.yml 文件样例：")]),s._v(" "),e("div",{staticClass:"language-yml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-yml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cluster.name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docker-cluster"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("network.host")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0.0.0.0\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h3",{attrs:{id:"持久化目录挂载："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#持久化目录挂载："}},[s._v("#")]),s._v(" 持久化目录挂载：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("-v D:/dockerMount/elasticsearch/data:/usr/share/elasticsearch/data\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"插件目录挂载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#插件目录挂载"}},[s._v("#")]),s._v(" 插件目录挂载:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("-v D:/dockerMount/elasticsearch/plugins:/usr/share/elasticsearch/plugins\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"_3-安装ik中文分词插件，参考https-github-com-medcl-elasticsearch-analysis-ik"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装ik中文分词插件，参考https-github-com-medcl-elasticsearch-analysis-ik"}},[s._v("#")]),s._v(" 3. 安装ik中文分词插件，参考https://github.com/medcl/elasticsearch-analysis-ik")]),s._v(" "),e("h3",{attrs:{id:"在线安装方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在线安装方式"}},[s._v("#")]),s._v(" 在线安装方式")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it elasticsearch "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/share/elasticsearch\n./bin/elasticsearch-plugin "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v6.7.2/elasticsearch-analysis-ik-6.7.2.zip\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h3",{attrs:{id:"离线安装方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#离线安装方式"}},[s._v("#")]),s._v(" 离线安装方式")]),s._v(" "),e("ul",[e("li",[s._v("下载：https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v6.7.2/elasticsearch-analysis-ik-6.7.2.zip")]),s._v(" "),e("li",[s._v("解压重命名目录为ik")]),s._v(" "),e("li",[s._v("复制到容器内插件目录/usr/share/elasticsearch/plugins下，挂载了插件目录的话，直接复制到插件挂载目录即可")])]),s._v(" "),e("h3",{attrs:{id:"安装完重启容器即可-docker-restart-elasticsearch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装完重启容器即可-docker-restart-elasticsearch"}},[s._v("#")]),s._v(" 安装完重启容器即可: "),e("code",[s._v("docker restart elasticsearch")])])])}),[],!1,null,null,null);a.default=r.exports}}]);