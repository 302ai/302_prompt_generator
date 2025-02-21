# <p align="center">🤖  AI 提示词专家2.0 🚀✨</p>

<p align="center">AI提示词专家2.0将用户简单的提示词改写成高质量的CO-STAR、CRISPE、QStar(Q*)、变分法、Meta Prompting、CoT思维链、微软优化法和RISE结构的提示词，并且可以在线修改和测试，还提供对文字生成图片的提示词优化，可一键转换为高质量的英文提示词。</p>

<p align="center"><a href="https://302.ai/tools/prompter/" target="blank"><img src="https://file.302.ai/gpt/imgs/github/20250102/72a57c4263944b73bf521830878ae39a.png" /></a></p >

<p align="center"><a href="README_zh.md">中文</a> | <a href="README.md">English</a> | <a href="README_ja.md">日本語</a></p>

![界面预览](docs/302_AI_Prompt_Expert_2.0.png)

来自[302.AI](https://302.ai)的[AI 提示词专家2.0](https://302.ai/tools/prompter/)的开源版本。你可以直接登录302.AI，零代码零配置使用在线版本。或者对本项目根据自己的需求进行修改，传入302.AI的API KEY，自行部署。

## 界面预览
只需输入简单的描述，AI就能生成高质量的提示词，并且支持在线优化和测试提示词。提供多种预设模板和自定义模板可选，满足您的要求。
![界面预览](docs/302_AI_Prompt_Expert_2.0_screenshot_01.png)      

可通过AI向导完善提示词，手动一步一步优化提示词。
![界面预览](docs/302_AI_Prompt_Expert_2.0_screenshot_02.png)        

当AI认为当前提示词已达到最高质量，将会输出最终提示词。
![界面预览](docs/302_AI_Prompt_Expert_2.0_screenshot_03.png)

## 项目特性
### ⚡ 多种优化方案
- 支持12种不同的提示词优化方案，提供自定义优化框架的能力
### 🔄 优化功能
- 自动优化：提供多种优化方案和模型
- 手动优化：手动输入需要修改的地方
### 🧪 测试功能
- 在线测试：直接测试提示词效果
### 🤖 AI向导完善
- 根据简单的描述，手动一步一步优化提示词，最终生成专业的提示词
### 📑 提示词模板
- 预设模板：提供丰富的预设模板库
- 自定义模板：保存个人常用提示词
### 🌍 多语言支持
- 中文界面
- English Interface
- 日本語インターフェース

通过 AI 提示词专家，将您的创意转化为完美的AI指令! 🎉💻 让我们一起探索AI驱动的代码新世界吧! 🌟🚀

## 🚩 未来更新计划
- [ ] 新增更多优化方案
- [ ] 新增更多预设模板

## 技术栈
- React
- Tailwind CSS
- Radix UI

## 开发&部署
1. 克隆项目 `git clone https://github.com/302ai/302_prompt_generator`
2. 安装依赖 `npm install`
3. 配置302的API KEY 参考.env.example
4. 运行项目 `npm run dev`
5. 打包部署 `docker build -t coder-generator . && docker run -p 3000:3000 coder-generator`


## ✨ 302.AI介绍 ✨
[302.AI](https://302.ai)是一个面向企业的AI应用平台，按需付费，开箱即用，开源生态。✨
1. 🧠 集合了最新最全的AI能力和品牌，包括但不限于语言模型、图像模型、声音模型、视频模型。
2. 🚀 在基础模型上进行深度应用开发，我们开发真正的AI产品，而不是简单的对话机器人
3. 💰 零月费，所有功能按需付费，全面开放，做到真正的门槛低，上限高。
4. 🛠 功能强大的管理后台，面向团队和中小企业，一人管理，多人使用。
5. 🔗 所有AI能力均提供API接入，所有工具开源可自行定制（进行中）。
6. 💡 强大的开发团队，每周推出2-3个新应用，产品每日更新。有兴趣加入的开发者也欢迎联系我们
