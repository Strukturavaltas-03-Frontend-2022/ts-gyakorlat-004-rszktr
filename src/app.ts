// Importáld be a HumanHero és TransformerHero osztályokat.
import { HumanHero } from './hero'
import { TransformerHero } from './transformer'

/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */
export const humans: any[] = [
  new HumanHero(1, 'John Doe', 'male', 20, 50),
  new HumanHero(2, 'Jane Doe', 'female', 25, 100),
  new HumanHero(3, 'Jim Doe', 'male', 50, 80)
];

/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} transformers
 */
export const transformers: any[] = [
  new TransformerHero(4, 'Cruella de Vil', 0, 4, 'dalmatian'),
  new TransformerHero(5, 'Lucifer', 2, 0, 'demon'),
  new TransformerHero(6, 'Hook', 0, 0, 'pirate')
];
