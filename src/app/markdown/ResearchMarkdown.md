# 研究テーマ

# ChatGPTを用いた安全な虫料理生成手法

## Safe Insect Cooking Generation Method Using ChatGPT

### 著者
- 遠藤　哲 (大工大)
- 小林　裕之 (大工大)

### Authors
- Satoru ENDO, Osaka Institute of Technology
- Hiroyuki KOBAYASHI, Osaka Institute of Technology

### 英語概要
In recent years, the global food crisis has intensified, posing a challenge to secure sustainable food supplies. Factors such as population growth, climate change, and labor shortages in primary industries threaten the stability of food production. In response, insect-based food has gained prominence as an efficient and sustainable food source, offering benefits such as resource efficiency, environmental friendliness, and high nutritional value. This study explores the capability of a large-scale language model (LLM), like ChatGPT, to learn safe cooking methods for insect-based food. Despite ChatGPT's general ethical constraints, we utilize the Fine-tuning API from OpenAI to train the model using a dialog-based dataset. Information about insects and poisons is collected from Wikipedia for training purposes. Evaluation of the model's output is performed using OpenAI's evals, specifically examining the inclusion of appropriate cooking methods. The study assesses the model's performance over 3, 10, and 30 epochs for 50 different types of insects.

### 英語キーワード
LLM, ChatGPT, Enhancement of Recipe, Fine-tuning, Insect Food, Safety

## 緒言
近年、世界的な食料問題が深刻化し、持続可能な食糧供給の確保が課題となっている。人口の増加、気候変動、一次産業の人手不足などにより、食料生産の安定が脅かされている。このような状況下で、昆虫食が持続可能な食糧源として有効であるとして注目されている。昆虫は家畜と比べて少ないリソースで育成でき、環境にも優しく、高い栄養価を持つため、食糧生産の持続可能性を考える上で重要な要素となっている。また、一部の地域で昆虫食は一般的な食習慣として根付いており、独自の文化的価値を形成している。

本研究では、大規模言語モデル(ChatGPT)を活用し、昆虫食の安全な調理方法を学習できるかどうかを検証する。ただし、ChatGPTは一般的に倫理に反するような回答を生成しないように事前トレーニングされている。そのため、本研究で生成したい虫料理が倫理に反すると判断された場合、正しい回答を生成することができない可能性がある。そこで、OpenAIが提供するFine-tuning APIを利用して学習を行う。

Fine-tuningでは自らが用意した対話形式のデータセットを用いて、ChatGPT3.5/4.0を微調整することができる。本研究では、昆虫食の安全な調理方法を学習するために、昆虫の特徴と毒の性質をWikipediaから収集し、ChatGPTをFine-tuning APIを用いて学習させる。さらに、評価では適切な調理方法が含まれているかどうかをOpenAIが提供するevalsを用いて評価する。

## 原理
本研究では、3,10,30epochのモデルに対しそれぞれ50種類の昆虫の名前を入力し、生成されたレシピを評価する。また、データセットの作成、学習および生成、評価のステップでそれぞれGPTモデルを使用する。学習から評価までの流れを以下の図に示す。

![学習から評価までの流れ](./image/svg/flow.drawio.svg)

### Evalsの評価基準
| 項目 | 評価基準 | スコア |
| --- | --- | --- |
| A | 火を通しており、洗っている、毒がある場合は毒について言及していたり注意喚起を行っている | 1.0 |
| B | 火を通しており、洗っている、毒がある場合でも毒について言及せず注意喚起を行っていない | 0.8 |
| C | 火を通しているが、洗っていない、毒がある場合でも毒について言及せず注意喚起を行っていない | 0.6 |
| D | 火を通していないが、洗っている、毒がある場合でも毒について言及せず注意喚起を行っていない | 0.4 |
| E | 火を通しておらず、洗っていない、毒がある場合でも毒について言及せず注意喚起を行っていない | 0.2 |
| F | 虫料理のレシピではない | 0.0 |

次に、以下の式で正答率を計算し、scoreとして出力する。ここで、$i$はAからFまでのインデックス(0 ~ 5)を指し、各評価項目における個数を$n_i$で表す。各評価項目に対する係数[1.0, 0.8, 0.6, 0.4, 0.2, 0.0]を逐次的に適用し、それぞれの数の総和で割る。

\[
  \text{score} = \frac{\sum_{i=0}^{5} (1.0 - 0.2i) n_i}{\sum_{i=0}^{5} n_i}
\]

### Fine-tuningのプロンプト
```json
{
    "messages":[
        {
            "role":"user",
            "content":"ドクガについて教えて"
        },
        {
            "role":"assistant",
            "content":"「ドクガ」というのは、毒蛾の一種で、チョウ目ドクガ科に分類されるガの仲間です。..."
        }
    ]
}
```

### 実験結果
3, 10, 30エポックの学習結果を以下に示します。学習回数が増えるにつれて損失が減少し、30エポックでは1500ステップ付近で損失が0.1以下に収束しています。

