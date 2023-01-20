/** @type {import('cz-git').UserConfig} */
const Configuration = {
  extends:['@commitlint/config-conventional'],
  prompt:{
    messages:{
      type:'请选择你要提交更改的类型:',
      scope:'指明更改的范围（可选）:',
      customScope:'指明更改的范围:',
      subject:'此次更改的简介:\n',
      body: '提供详此次更改的详细描述（可选）。使用"|"换行:\n',
      breaking: '列出破坏性更改（可选）。使用"|"换行:\n',
      footerPrefixsSelect:'选择与本次更新相关的 Issue 类型（可选）:',
      customFooterPrefixs:'输入 Issue 前缀:',
      footer:'列出此次更改相关的 Issue。例如：#31, #34:\n',
      confirmCommit:'确定要执行以上配置的提交吗？'
    },
    types:[
      {value: 'feat',   name:'feat:      新特性'},
      {value: 'fix',    name:'fix:       修复 bug'},
      {value: 'docs',   name:'docs:      仅更改文档'},
      {value:'style',   name:'style:     不影响代码运行的更改'},
      {value:'refactor',name:'refactor:  重构（即不是新增功能，也不是修改bug的代码变动）'},
      {value:'test',    name:'test:      增加缺少的测试或者改正现有的测试'},
      {value:'chore',   name:'chore:     其他未修改 src 和 test 文件的更改'},
      {value:'perf',    name:'perf:      提升性能的代码更改'},
      {value:'build',   name:'build:     影响构建系统或者外部依赖的更改'},
      {value:'ci',      name:'ci:        针对 CI 配置文件或脚本的更改'},
      {value:'revert',  name:'revert:    回退提交'},
    ]
  }
}

module.exports=Configuration
