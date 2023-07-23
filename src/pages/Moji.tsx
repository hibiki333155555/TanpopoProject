import { ReactElement } from 'react'
import TextAnimation from '../components/TextAnimation';

export function Moji() {
  return (
    <section id="souseki">
      <TextAnimation section="souseki">
        吾輩は猫である。
        <br />
        名前はまだ無い。どこで生れたかとんと見当がつかぬ。
        <br />
        何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。
        <br />
        吾輩はここで始めて人間というものを見た。
        <br />
        しかもあとで聞くとそれは書生という人間中で一番獰悪な種族であったそうだ。
        <br />
        夏目漱石
      </TextAnimation>
    </section>
  );
};