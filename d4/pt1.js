const run = () => {
    let final = 0;
    const theWord = "XMAS";
    let data = input.split("\n");
    console.log("data.length = " + data.length);
    for(let i = 0; i < data.length; i++) {//going down

        for(let j = 0; j < data[i].length; j++) {//going across

            if(i >= 3) {//Can look up
                if(`${data[i][j]}${data[i-1][j]}${data[i-2][j]}${data[i-3][j]}` == theWord) {
                    final++;
                }
            }
            if(i <= data.length-4){//can look down
                if(`${data[i][j]}${data[i+1][j]}${data[i+2][j]}${data[i+3][j]}` == theWord) {
                    final++;
                }
            }
            if(j >= 3){// Can look left
                if(`${data[i][j]}${data[i][j-1]}${data[i][j-2]}${data[i][j-3]}` == theWord) {
                    final++;
                }
            }
            if(j <= data[i].length-4){//can look right
                if(`${data[i][j]}${data[i][j+1]}${data[i][j+2]}${data[i][j+3]}` == theWord) {
                    final++;
                }
            }

            //diag
            if(i >= 3 && j >= 3){//up and left
                if(`${data[i][j]}${data[i-1][j-1]}${data[i-2][j-2]}${data[i-3][j-3]}` == theWord) {
                    final++;
                }
            }
            if(i >= 3 && j <= data[i].length-4) {//up and right
                if(`${data[i][j]}${data[i-1][j+1]}${data[i-2][j+2]}${data[i-3][j+3]}` == theWord) {
                    final++;
                }
            }
            if(i <= data.length-4 && j >= 3){//down and left
                if(`${data[i][j]}${data[i+1][j-1]}${data[i+2][j-2]}${data[i+3][j-3]}` == theWord) {
                    final++;
                }
            }
            if(i <= data.length-4 && j <= data[i].length-4){//down and right
                if(`${data[i][j]}${data[i+1][j+1]}${data[i+2][j+2]}${data[i+3][j+3]}` == theWord) {
                    final++;
                }
            }

        }
    }


    
    
    console.log("FINAL: " + final)
}



const testin = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`;

const input = `SMASMXMXSAMXSASXXAMXMAXXXMSXMASAMAXMASXSMXXMXMXAMXXXSAMXMXMSMXSXMASMSAAAXMASXMSMMSSXMMSSMXSMXXXMAXMMMXMXAMXMXAXMASXMMMXAXMAMSAMXAMMAAXXMASAM
AMASAASAMAMSAMMXMSXSAXSMSXMAMXSXMASAAAAAXSXMXMASXMMMSXSMMXMAXAAASMMAMXXMSAMXMASXAAXAXAXSAMXMSMSMSXSAMMSMXXAXMSMSMSASXXXXMXSASXSXSXSSXSAMXSAX
MSAMMMMASAMMAMXSXXAMMMXAAXMSAMXAMASMMMSMMSAMXXAMAAXASMMAASXMSMSMMSMXMAXMXMAMMAMMMMSMMSMXSAMXAAAAXASASAAAMSMXAMAAASAMAASXSAMAMXMAMAMAASAMAXMM
XMASMXSMMXXSAMXSMMMMXAMXMSAXAXSXMASXAXAMASAMXMSSSMMXSAMSMMAXXAMXAXMASMASASMMSAMAAMAXAMMAXMMSMSMXMASAMMMSMAAMSMSMXXAMMMMAAAMSASMSMAMXMXAMMSMS
MMAAAAMXMAMAAXAMMAAXSXSAMXMXMMMAMMXXXMXMASAMXMAMAAXXMMMAASXMMAMMSSSMMXASASAAAXSMXSAMSAMASAMXAMMXSXMAMXXXMMXMXAXXMSAMXAMXMXMXASAMXXMXMSXMXAAA
AMSSMMSAASASXMSXSXSMMMSAXXXASXSMMSXMMSSMASAMAMASMMMXSASMMMAXMMXAMXAAXMXSAMMMXMSXMAXXMAMASMMAMXMASASXMMMMAXAASMMAXMAMSASMMMMMMMXMASXXMAMXSMSM
SAAAAAXMSMMASAAXSAMMSAXMASXMAAAXAMAMXAAMXMAXXSASAAAASXSSSXXXXMMSSSSMMAXMAMXSAAMMXSSMMXMMMAXAMXMASAMMSAAMMXMXAASXMXMXSAXMMAMSSSXSAMXMMAXXAAAX
AAMMMMSMAAASMMMMSAMAAMXMAMAAMSMMMSAMMXSMSSSMAXAXXMMMSXMAXXSMSMAXMAAAASXSXMAXMSMAAMAMSMMAMMXMXXSAMXMAMMXSAXSXSMMMMMSAMXMASASAAAAMAXAMSASXSMSM
MMXXXXAXMMMMAMMMSAMXXXXMAMXMXXXAXXASXMMAMAXMSMSMXXXXXASMMMSAAXSSMSMMSMMMMMMSXXAMXSAMAASMSSXSAAMXMMMMSMXMASMAMXMAAXMASMMASXSMMMMSSSMMSXMAAAXX
XSXMASXXXXSMSMAASXMSMMMSMSXSSSMSSSMAAXMAMXMXMAXSSXSMSXMSAAMMMSXMAXXMAAAXMAMMAXMXMAASMXMAAAAAMSMAMAAAAMXMXMMAMASMSSSMMMMASASXXXXAXXMASAMMMMSA
XMAXAMAMSAMAXSMMMAAAAAAAXAAAAAXAXAMXXMSXMAAAMMMAMASAMXASMSMXMXAMAMAMASXSXSAXMXXMAMMMMSMMMMMMSMMMSSSSSMMSAMSMSXSAMMAMAMSASMSSSMMMSXMASMMXSAMM
SSSMASASMAMAMAMMMMMXXMXMMMXMXMMMSXMSXXMASXXXSAMAMMMSXMAMAAMASMMMAXXMMXMMAMXAMMMMSMMSAMXXXXAXMAXMAAMAAAAMXXAAAXMXMXAMMMMXMXMASASMMMMXSXXAMASX
AAASMMXSMSMXSAMXASXASMSSXSAXASAMAAXAAMSMXSAASXSAXXSMMSSMMMMMXAXSXSAMXAXMXMSAMAAAAAAMASAXASAMMMMMMSMSMMMSMSMSMMMSMMMXMMSSMSSMSXMASAMXMMMMXXMX
MXMMSAMXAXAASXSSMSAMXAAMASASXMASMSMMMAXSAMXMSXSAXXASAAMAMAASMMMAASAMSMMSAMXAXSMSSSMSMMMSMAMMASAASXXXXAAAAAXXXAAASASXSAAAXAAXXAXMAMMAMAAXSSSM
XASXSXSMMMMMMXXAXXMAMSMMAMMMMSMMXAXXXMXMMMMXXXMASXAMMXSMMSMSASXSMSAMXAAXAXSSMMMAXAAMMAXMXAXMXSSSSXAXSMXSXMXSMMXXXXMAMMSMMSSMXXXMAXSASMMMAAAX
MMSASASAXMXSMMMSXSAMMMAMXMMAXAXSXMMSSMAXXAMXMXXAAMMMMXAAAMXSAMAAXSASXMMSSMMMAXMXSMMMSXSXMASXAXXXXXMAXMAXASASXAMSMSMSMMXXXMXXAMMSAMSASMMSMSMM
SXMAMMMXMAAXAAMAAMMXAMAMSMXAMMXMAAAAAMAMSMSAMXMAMMAAASMMMSMXASAMXSXMASAAAAAMSMSAAXSAMMSXMAXMMMMSMMXASXMSAMAXMXXAAMAMXMMMMMMMXSAAAMMMMXXAAAXX
MXMAMMSSSMXMSMSMMMXMMSAMXMASMXAXSMMSSMMMAAXXMAMMXSMSMMAXSXASMMXXXMMSMMSSSMMSMAXMASMAMAXAMMSMMAAAAXMASAASAMSMAMSMXMAMAMASMXAMMMMMMMXMASXMSMMX
SASASXAAMMAAMAMMMMAAASMMSMAMAXMMMAMAMAXSMSMSSMSAAXAXASAMXAMXAAXXMAXSAAXXAAXSMSMXMXMMMSSMMMAMMSMSSMMMMMMMAAXMAMASASASASMSXMAXAXXXSSSMASAXXASX
SASASMMSMMMSMAMAASXSMXMASMAMSMMASAMAXXXMAXXAAXMASAMXAMMXMMMSXMXSXSASMMSMSSMMAAMXMASXAAAMAXXSAXMMXMXMAASXMMMXXSASMSXSASXMXMASXMMAMAMMASMMSAMS
MAMAMAAMAXSXXXMSMSAMXSMASMMXAAAAXASXSSMSASMMSMXMAMSMXXAXAXAXAMAMXMMMXAXAAAAMXMMMMAMMMMMSASMMMSAMMMAMXSXXAAAMXMMSASAMXMAXAXAAAXAAMAMMASAXMMMA
MAMAMMMSAMMAMXMMAMMMMAMASASMXMMSMMMMMXAMASXMAMAMXAXXSXMMSMMSSMASXMMXMASMMSMMMXXAAMSAMAMMASAAASAMASAMMXXSSMMXAAMMMMXMASXMXSXASXSXSASMASMMAAAM
SAMAXAAXXAMAMAAMAMSAMXSXMAMAXSAMASXAAMXMAMASASMSMMAXMASAAXMAXSAMAMSAAMSMMXAXAAXSSMSMXAMMAXMMMSXSMSAASAAMXMASXSMASXMMXASMASMMAAAASMAMXMASXMXX
SAMXSMSMXMMASMSSMMSASMXAMSMSMMASAMXMSMSMSSMMASAXAMAMXASMSXMXMMMSSMSXSAMAMSMMMSMMAAXASMSSMAXAAMMMMMMMSAMSAMXSAAMAMAMXMASXAMASMSMMMSAMXSASMSMS
SAMAXAAXMMSMMXAXMASAMMSXMAAMAMXMXMMSAMXAAMXMXMMSXMSSMMSXMASXMAXAMXMMMMSAMAXASMASMMXXXAAAMMXMMSAAMAMMMAXMAMXXXMMMXAMXMASMAMMMAAXAXMXSMXAMASAM
SAMXSMMSAMASXMASMMSXSXXAXMSMXXMXXAXSASMMMSAMASXMMXXAAASAAXXAXSMMMAAXAAMASXSSMSAMXSMSMMSMAAMXMSMSSMSAMXMSSMSSMMXSMMSXMMSXSSXMSMSMMMSSXMSMAMAM
XMMXSAMXXSAXMAXMXXMASMSMMXXMMMXMSXAXXMXMASASASASASMSMMSMMMMSMMAXSSXMASXXMASAMMSSXMAXAAAXMMSAAMAXAXSXMAMXAAAMAAAXASXXSMMAMSAMMAXXAXAXXXAMMMAM
SXSASXMMXMASXSSMSMMAMAXMAXSAAMSXSMSMSSXMXSAMASAMSAXXSAMXAAAMASXMMMASAMXAXMMXMAXMAMMMMMMXSASMSMSMAMMXSAMSMMMSSMSMMMAXXAMMMMMMMMMSXMASMMMMMSMM
AAMXSAMXMASAAAAAAXMSXSXMASXMASAAXAAAXMASAMXMMMMMMMSMMSSSSSMSAMMAAXMMMMSMMXMAMSSSMMSSSSXAMASXAXAASXMASAXXXAXMMAXXXAMMSXMAAXMAXSAAXSAMAAXAAAAA
MXMXSMMASXXMMSMMSSXXAMXXSXXXSAMXMSMSMSSMMSASMMSAMXSAAAMAMAXMASMSMMSAAMAAXMXAMAAMXAAXAXMXSXMXMSMSMAMMSMMMMMMSMSMXSASMXMSMSMSASMMSMMASXMSMSMSM
XMXMXXMMSAXXMXAAXXAMAMMXMAXMASXAXMMXAMAAMSMSAAMASAXMMSMAMMMMMMAXMASMMSSSMSSSSMMMMMSSMXAAMMMAXXXAXMMAXMASMMMAAAAASAMXAXXMAAMXMXXXASAMMMXAMXMA
MXAAMMSAMXMSSXMMSMXMAMAMMMMXMAMXMXAMAMXMMXASXMMMMMXMMMMXSXAAXMMMSAMAMXMAMAAMSAMXAMMAXAMSMAXMMMSXSXMASMMMAASMSMMMMAMSSXMMSSMSMSXSMMMSAXMAMASM
MSSMSAAAXXXAAXSAMXSMSXSAASXMXSSSMMSSXMASXMXMMSXSASXSAAXSMMSXSAXAMAMMMXMAMMXMSXMSSSXXMMXAMSMMAASAAXSASAAMSMMAXXAAMXMXMASAMXAXXAMSAMXSXXMAMMMM
AAAAMAMSMXMMMMXAMXMAAAASMSAMSXAASMAMASASAMXSAXAMMSASMSMAAAAASAMXXAMAAMXSSXSMXSMAMMMSMSSSMXMXAXMSMAMASMMXAAMXMSSMSAMMSAMASMMMMMMSAMAMSXSAMXAX
MMSMXSMMXMXSAMXAMSMMMSMMXMAMXMXMMMXXAMAXASASMMAMMMXMAMXXMMSXXASMSMSMMSAAXAXAAXMAMAMAAMAMAXXXXXMAXSMAMASMSMMXXMASMXMAMMSSMXASXXAXAMSSSXMASMXS
XXXMAMXXXXAAAMXAXXAMAXAXXSMMMSAMXMMMSSMSMMASXMMSAMAMMSXMAMXMSMMAAAXAAMMMMMMMMMMMSASMSMAMMMMXSASMSMMXSAMMXAAMSSXMMMSAMXMAMMMXXMASXMXAMASMXMAM
ASAMXSXXMMMSAMSSSSXMASAMMAAAAMASAMAAMAMAAMAMAXAXASXSAAASXMAXAAMSMMMMMMXSASAXXAAAMXMMAMASXAAASAMXSAAAMAMAXMMMAAASXAXASASAMASMMMMAMSMMMAAAAMAM
MMASAMXMMSAXMMSAAMAMASASXAMMXSAMAXMXSASMSMMSMMSSMMAMMSXMASXSMSXAMAAMXSMMASXSSMSMSASMXSAMXMMXMXMAMMMXSAMSSMXAMSXMASMXMASASASASXAAXXAMMMXSMSAX
XSXMASMSAMXSASMXMMXMXSAMASMSXMASMMSASMSAMAXAXXXAAMAMXMXMASAMXMXMSSMSAAAMMMMMAAAASAMXAMASMXMMXSMSSXMXMAMXAXMSXMASAXSAMAMMMMSAMXSSSSXMAMMMAXXX
MMXAXXXMASAMXAXMASMXAMAMXMASXMASAMMAMAMAMXSASMSMMSMSAMASAMMMASMMAMAMXSMMAAAMMMMMMAMXMSAMMASXAXAXXMSASAMMMMAAASMMMASXMMMSAXXXMAMMAAMSASMMMMSA
XMASXMSSMMMSSXSASAMMMSAMMMAMXMAXXMXMMSMSMXMAMAXXAAXMASMMMSMSASASASASAMASXXMSSMXSSXMAMMXXSASMXMMMMMSASASASMSMXMXXMASAMSASMSMXMXSMMMMMASXAAAAM
AMAMAXMASMXAAASMMMAAXMASAMAMXSSMSSSXXXAASAMAMXMMSSXMAMAAAAAMAXMSASMSASXMMXSAMXAXMASXSAMMMASASAMAAMMAMASASAXXMMXXMASMMMASAAAAXXMXMASAMXMXMAXX
XMASAMSMMSMMMXMASXSSMMMSXMASAAAAAAMMMSSMSMSSSMMAMXAXSXSMSSSMSSXMXMASAMMMXMMASMMXSAMAMMSXMXMMXAXSMSMXMMMMMXMAMAMMAMXXAMXMXMSASXSASMXMSSXMXSXM
XMASAMXXAXXXMASMMAMAMSAMMSMMMSMMMSXSAAAXXAAXAMMASMSMMAMMAAAAAMXMXMXMMMSMAASXMASXMMSXXAAAAAMXSSMXAMMMXXSXSASXMAXMAMXSXSXSAMXAAASAXXAMAAASAMAS
XMASMMXMASXSXXXXMXMAMMASAAAAAAXXXXAMMSSMMMMSSMSXXXAAMXMXMSMMMSAMXSAAAAAMAMXAXSMAAAMAMXSXSMSAAMAMAMSMSASXSMSAMASMASXAMMMMAMMMMMMSMXMMMSMMASAM
SMASMSMSMMAAMSSMMAMAXSSMMSSMMXMXAMXMXMAMXAMXAASAMSSSMSMSXMMSAMXSASMSMSSSSSSSMMSSMMMSAMXAXAMMSMXMAMAAMXMAMMSAMASMAMXMASASMMSASXAAXASAMAXMXMMS
XMASMXAAXMMMMAAASMSMMMAAAMAXXASMSAASMXASMSSSMMMAMXAMAAAAASAMMSMMASAMXMAXMAAXMXAXXMAMXMMMMMMMAMAMXXMMMAMAMASAMXMMAMAMXMAXXAMASMSSSXSASASMXMAS
SMMXMMMMXXXAMMMMMXAMASMMMSAMMAMAASASAMASAXMAMAXAMMMMSMMMMMAMXAAMXMAMAMXSMMMMSMMMSMMSASAMASMSASASXMSASASASMSAMSMSMSMSMMSMSSMAMAAAMXSAMASAXMAS
SASMMAAXXMMSSSXSXSXSASASAMAXMAMXMMXXMXMMMMXXSXSSMSXMASXMXXMMMSSSMSSXMSAMXSMAAAAASAASASMSASXSASXSAMSAMAXASXSMMXAAAAAAXXAAAAMSMMMSAMMSMAMMMMAS
SAMXSMSMMAXAAMAMAMXMASAMXMAXMAMSXSMMSMXAMXMASAAMASASASXMSMASXAMAAXMASMASAMSSMSMMMSMMMMXMASAXAXASAMMMMSMMMASAMXMMXMXAMSMMMSAMXMAXMXAXMXSXXXAX
MAMMMMMAMSMMSMXMAMSMMMMMSSMMSAMSAXAAAAMMMXAAMMMMAMAMXMXAAXAXMXSMMMMXMAXMXMAXAXMAMASXXXXMAMMMXMMMAMXAAXAMMXMSMAMSASASAMASAMAXXAMXSMMXSAMXAMXM
MAMASASAMMAXAAASAMAXXAMAMAMAMXSMSMMSSSSMMSSSMAXMMSAXAAMSMSMXAMXXAAXSMSSSMSASXMAXSASXMXMAMASMAAXSSMMMXSSMXMMAMMSMAMAMXSAMASASXXMAXAMAMASAXXSA
XAXXSASXMXSSMSMSASMSSMMMSAMMSMMAXXMAMMAAAAXAXSMSASASXXAAAAMASXMSMSMSAAAAAMAMXSMAMAMASMMMSMASXSAXAAXSXAAXXXMAMMAMAMSMAMASAMAXMAMMSSMXSAMXSXSS
SSXMMXMAMAXXMAMXAMAAXXAAXMXMAMMAMXMXSXSMMSSMMMAMXMAXASMMSMSAMAMXAMXMMMMMMMAMMAMXMAMMMAAAAMMXMMMSMSMSMMMMMMSSSSXXAXXMAMAMAMAMMAMXAAMMMASXMAMA
AAASXSMXMSSMSSSMSMSMSSMSMSASAXMXSMSMSAXXXMMXAMMMASMMAMSMAMMXSMMMSMASXSXAXXASXXXXSASXSSMSSSXAXAAXXXAXXMAAXXAMXAMSSSXSXSSSXMAMMAXMXSMAMMMXMAMM
MSMMAAXSXMAAAAAXAAXAXXAAAXAXXMMMMAAAMAMSMMMSXSXSAAAMXAXXASAMXAAAAAMAAMMSSSMMMXAMMAAAMMMXAAMMSMMSSMMMXXXSSMSSMXMAXMMMMMXAASASXSMSXMMSMASMSSSS
MAAMMMMMASMMMSAMMSMMMMMMSMAMSASXSSMMMAMAXAAMASMMSSXMMMMSXSXMXSMSSMMMMMMAMAASAMXXAMMXMAMSXMXXAXAAXAXMMSAAXAMXMMMSSMAMAMSSMMXSAMASAMAASMMAAAAM
SMXXAXXSAMMSAXMAXAAMASXAMMAASASAMASXSXMSSXXXAMMAMXMXAMMAMXASAMXAAASASAMMXSMMMAXAXSSXSMMMAXASXSMSSSMAAMMMMSMAXXMMAMXXAMAAASASAMAMAMSMSXMMMMXM
MXMSSSXMASAMAXXSSSSMAXMASXXXMAMXMAXMASAAMMSMSSSMXSASXSXSXSAMXSMXMMSASASXMAXXXSXSXMMMMMASMMASAXXXAXMMMSAXAXSXMMXSAMXXSXMSXMASAMXSAMXXSAMXSXMS
XAAMAMASAMMSXMSXMAMMSSXSAMXMMAMMMSSXASMMMAXAAAAAASMSXSAMASXMAXMAMXMAMAMMAMMMMMMXXMAAASASASAMMAMMXMXMMSXMAMAXAAAMXXMAMMXMXXASAMAXAMXSSXMAMASA
SMMSAMMMMSXXAXXAMAMMAMMMSMSASXMXAMSMXSAASMMMMSMMMSAXXMAMAMAMSSSXSAMXMSMMAXAXAAAXAAXXXSASMMASXAXSMSAAXMAXSAMXXSXSAMSAMASXSMAMMMAMSMMMSXMMSMMM
XXAXMXMAMMMSMMSMMXXMAMAXAMAXMMSMMSMSMMXMMAAAAXXAXMMMASAMASXMXAAAAMMSMMASASAXSMSSMMSMAMXMASMMMMSMASXSMSXMAMXMAMAMAXMASXMASMSMSMSMXASAMXXMAAXX
XMMSMASMMAMAAAXMXSMSSSMSXSMSMAAMXAAAXSMMSSMMSSSMXAXMAXASXSASMXMAMXAAASAMASMMXMMAAAAMXMASAMAAXXAMXMMXXSMMAMAMAMAMMMMAMAMAMMAAAAAAXXMAMASXSMMM
MAMAMMXAXSMSXMXSAAAXXAAMXMXMMSXMMMXMSAAAXAAXAXMASASMMSAMASAMXMSAXXSMMMXMAMMAMSSSMSSSXMAMMSMMXMAMAAXMASAXMSXXXSXSXMXSSMMSSSMSMSMSMXSAMXXAAXAA
AASASAMSMXAXXMAMXMMMSMMMXSAMMXAAXMAXMXMMSMMMMSMMAAMAXMAMMMMMAASXSXMMAAXMXMMMSAAXAXXMAMXSMXMAASXMSSMSXSAMMMMAMXASAMAMAMXAAAAMAAAXAMXXMXMSMSXS
SASASMAAAMMMMMASMSSMXAAXAXAMASMMMSMSAMSMSXMAXAMXMMMXAXAMXASXMMXXMASAMXASAXXXMMSMMMSMMMXSXAMMMSAAAAXAAMMXAAXSSMXSAMXSAMMMSMMMXMMSMXMASMAMAMXX
XXMAMXSMMMXMXAMSXAAASMMSMSSMXSMSMXSAMXAAXASXSMSAMXMASMMSSXSXSAXXMAMXMXMMAMSAXAAAMMSAMSASMXMMXSMMMMAMXMMSMSMASAASAMXMAMXXMXAXXXMAAASAMMAMAXAM
SXSAMXXMXSASASMMMSMMXAXAXAAMXSAAXSAMSSMSMMMMAMSASXSXMAAAMAMASXXMMSSMMSXSAMXMMSXSAASMMAAMAXMXAMXXSXSXSXAXAMMAMXAXMSXSMXSAMSMSXXXMSMMASMXSSMXS
AAMAMSXMASASMMAAAAMXMSASMSXMAMSMSXXXAMAMASAMAMSAMXMMSMMMXAMMMMMXAAAAASAMSSXMMMAXMAMXXMMMSMSAXMASMAMASMSMXMMXSMXMAMAMAASAMXAAAMSAMXMAMXXXMMMM
MSMSMSAMMMMMXSXMSASXMMAXAXXMAXAXAMXMMSAMMMAXXMMSMMSAXXXXSMSMASMAMSXMMMAMASASAMAMXMMSMSXXAAASMXMAMMMAMAMXMXMAXAAAMMSMMMSAMXXMMMAASMSXSXSAXAAA
XAAXAXXMXAXSAMXAMXMMAMAMAMMSMSMMAAMMXMXSXSSMXMAXXAMMSXMAXSAMXSASMXXMASMMASMMAXMAXMAAAMSSMXMAMXSSMMMMMMMASAMXXSSSMAAAMAMMSSXMASXSMAAAMAAMSSSM
SXSMXSAXSMMMASMXASAXAMAMXMAAMXXXAXAAXMSXMAXAAMMMMSSXSAAMXSMSMXAXAMXSASMMXSXXXMMASMSMXSASXXSXSASAAMXMAXSASXMAMXAMMMSMMAMSAMMSASMAXMMAMAMMAAMX
XAXASAXAMXAMAMXMSXMSXMXSSMSSSXXMASXXSXSAAAMMMSAAAAXMSASXMMXSAMMMSMMXXXXSMMASMSMAMAAAXMMMMXAAMXSSMMSMMMMASMXXSMASXXAXSXSMAMAMAMMAMXXMAXSMMSMA
MSMMMMXMSSXSAXXMMAMAMSAMXAAMAMXAAXMAMAXMMSXSASMMMMSAMAXMAMAXXSMAXSAMXMMSAMXMAAMAXXMSMSXMXSMXMAMAMAMASXMXMAXMXXXMASXMXMAXMMSMSXMMSXMXMMXAAMXM
AXMMSXMMXAMSAMXAXAMAMSAMMMMXAXMSSMMAMXMXXXMMASAMXAAMMAMAXMXSAMMSSMSSXMASAMXXSMMMSMAMXAAXAXXXSXSAMXXAMAXXMSSMAMMMMMMMXXXXMXXAMMXMSXMAXAXMMSXX
SXMASAAMMSMMASXSSXMXXXAMAAMMSSMAXAMMSMXMXMAMAMXSAMSSMMSSMAMMXMAXAAXMXMASXMXMMXXAAMMMSXMMXSAXMAMXMXMSXSXXMAAMAMAAXAASXSMXSAMAMSMSMMSSSSXSAMMM
MAMXSMSAAMMSMXAAAXSXMMSMSMSAMAMMXSMAAAAMASXMASAMAMMAAAAAXMAXAMXSMMMXXAMXMMXASAMMSSXAAAXAMXMMMAMAXAMXAMMMMSSSSSSXSMMSAAXAMAMAMAXXAAAMMXXMASAS
SXMASAXMXSAAMMMMMXAXMAXMMAMMSXMAAMMSMSXSMSAMSMXSAMMXMMSMMXMSMSAMXSMASXSMASASXASAAMMMMSMAMAMXXSSMSSSMXMAXMAMMMMXAAMAMXMMSSMSMSXSSMMXSASXSAMMA
AMMAMXXAAMMMMSAAXXMMSASASAXXMXMMMSAXXMASXSXMAAASMSXSXMAMSMMAXMAXMAMAXMAXAMSXSAMMSMASAMMAMAXMSMAMAAAXMMSMMAXAAAMMMMXSAXAMAAAASMMAMAAMASAMMSXM
MXMXSXMMMMMMXSMSSMXAMMSASXMSMXSAMAMMAMAMXSASXSMMAXAAAXAMMASXSSSMSMMASMSMMSMXMXMXXXASXSSMSSSMSSSMMXMMXMAAMSMSMSSXXSASMMMSMMMMMASMMMMMAMXMAXXX
XMAAMAXAXAAMMXAXAXMXSASMMMAXMASASMXMXMAXMXXMAAXXXMMXAMSMSXMMMAXMAXMXSAMXMAMXMASMSMXSAMXMAAAAXAXXMASXSSXXAMXAAXMASMMMXAAAXAMSSMMXXMASAMXMMSXM
MMSAMSMSSSXSAXSSSMSMMMMAAXXMMMSXMXXMAXSSSMSMMMMMSAXMSAMAMMASMAMXMMSAMXMASASMSMSAAXAMXSAMASMMMMMMMMXAAAASXMSMSMMSAMXXSMSSSMSAAXXMXXAAAXXAXMXX
AAXXAMAMAMSMMSMAAASXAAMXXXXMAMXMXAXSMMMAAAXMAMAAASXSMAMXMSAMMASASASASXSXMAXXAAMMMMMMASAMAXAXMXAAAMMMMMAAMXXMAMXAXXMAAAXAAMMMMASMSMSSMMSAAMMA
XMMXXMAMMMASXSMSMMMXSMSMAMSXMMXMMSXSAAXMMMMSASMMSMMXMMMXXMAXSASASXSAMXAAMASMMSMMMMXMASAMSSMMSXMMMMAXXXXMAMSSMSSMMASAMXMMMMSXMASAAAXAMASXMAAM
XXSSSXSMXAMAXXAXXAMMXAAMAMMASMMSXMAXSMMSSXASXSASAMXAMAMMMMAXMMSXSMMMMMMXMASXAAXAAAXMXSAMAAAAAASASMSMSSSXSMAAAAAXMXMSSMMMAAAAXMMXMXSAMASASXSS
XMAAMAMASXXMSMSMSSXAMMMMXXXAMAAXMMXMAXSAXMMXXXMMASMXSAXASMSSSMXAXAXAAASAMXSMSMSXMSAXMXMMSSMMSXMAAAAASAMAAMSMMSMSAMSAXAXSMSAMXAAXMAMXMXSAMMXM
XMASMAMASMMXAAAXAXMMMSSMSXMMXMSMSASMMMMMMXMSXMASXXAMAMXMSAAAMMMMMXSMSMSASXSXMASAAXXMASAMAMXXXXSSMSMMMAMXMAXAXMAMAMMMSMMXMXMAMMSSMASAMXMAMSAS
XSAMXXMXMASMMSMMXMMXAAAXAXSXSAMAMASMAAXXMASAMXMMMMMMAMMSMMMMMAAXAXMXXXSMMMSAMAMMMMSAMAMXXXMXMAMAAXMMSSMAXXSXMMAMAMAXSXSMMASAAAAAMASASXSXMMAM
XMSSSSMMSSMSMAXXAASAMSSMXSAAMAMXMXMASXSXMXSMMAXAAAMMMSXAAXMASMSSSMSASXSAMASAMSSXXXMSASXMSSMMMSMMSMSAAASMSXMMXSXMAMSXXAAASXSXSMXSMXSXXASXMMSM
XAAXXMAXMMAASMSSMSAMXMAXXMMXMXMSMXSAXMAXSMMXSASMMMXAMXXSMMMAMXAAAXMASASAMAXMMXMAMXMXXXAMAAAMAAAXAMMMXXAMXAAMMMASMXAMMMMXMAMXXMMMMXSMSXMMSAMS
MMMMXSMMAMSMMMAAXXMAMSMMXMXMXMXXAMAAXMAMXAMAXXMASMSMMAAXXSMSSMMMMXSMMAMAMAMSAMXAMAMMXMAMSXMMMXSAMXAXXSMXMMMMAMMMSAAAXAXAMAMAXAAAAXXAMXMXMASM
XAAAASXMXMASXMMMXSXMXAASMSAAMAMMXMMXMMMSMSMMSXMAMMASMAXSAMAXMASAMXAXXAMAMXMAAMMSMXMAMSMMXXXXAAAMXSXSXMXSMMMSXSAAMSMXXMMMMAMXSSMSSMMAMAMAMMMA
SMMSAMXMXSAMXMAMAASXMSSMASASMSXSASXMMAMAAXXMAAMSMSAMXMMMMMAMSAMASMMSSSSSSMMXMMAXMSMXXAAXMASMMSSMASMMASASAXMAXSMSXMMSMSASMMSMXMAAAXXSSXSASAXA
MMAXXMXXAMMSXSAMMSMXMXMMMMAXAXXSASMSSXSMSMXMMSMMAMMSXXAXAXXMXASAXXXXAXAAAMSAXMASASAMSSMMAXXAAXXMXSAXAMXSXMASMSAMXAAAAMASAMSAMMMMSXSMAXXASASX
SMSSSSSMASAAMSASMAMMSAMMSMMMXMAMAMAXAMXMAXSAAAAMXMMAMXMSMSMMSMMMSMMMSMMMSAAASMXSMMAMAAXMAXMMMSXSASXMASXSASMAAXAXSMMSSMAMXASMSASXMMAMSAMXXAXM
MAMAAAAXAMMMMMMMMASXMASASAMXXMAMMMXMSAAMAMXMSMSSSXMASAAAXXMXMXASAXAAXAXAMXMAXXMXXSAMXSXMAMXAMSAMASXXXXASAMXSXSMMMXMXMMXMMMMAMAMASMXMAXSSMSMA
MAMMMMMSMMASXSMASXSASAMMSXMAXXAXAXSMMSSSSSMMXMAAXAMASMSMSASAMSXSASXMSMMMXAMMMSSMMXAXXMAMAMXAMMAMXMMMSMMMMMMAMMXAXMAAMXXXAXMSMSMAMASXMAAAAAMM
SASAAAAAAMAXXAMAMMSAMXSAXASXSMSSMSAAMAMAMXAASMXMSSMAMAAASASMXMAMMMXXXXASXXMAAXAAMSMSSMXMAXSMMSMMMSAAAASXAAAMAXSXSASXSAMMMSAAAAMMMASAMSMMXMSM
SXMXSSSSSMMSSMMSMAMAMAMMSMMAMAAAXSMMMXXMAMMMMXAXAAMXSSMMMAMXXMXMAAAXXMASAMSMSSSSMAMAMMSMXMAMXXAAAMMMMMMASMSXSXMASAMAMASMASMMSMSSMASXMMXXAAAM
MSSXXMMXMXAAXAAAMSMMMMSAAXMAMMMSMXAXXMAXMASMSSMMSSMAAXMXMAMXMSMSMSSSMAAXMXAAAAAAXAMMXAAAMSMMMSSMSSSMSASXMAXMMAAAMAMXMAAAAMXMXMAAMAMAMXASXSMA
SAMMAMXAAMMSSMSXMAMASXMXSSSMSAAAXXMXMMSXMAMAAAAAAAXAMXXXSASAAAXAAAAAXSSSSSSSMMMMSMSXMSSXXAMXMXXAXAMXAXAAMXMSSXMXSMMMMSSMMSXSAMMXMSSSMMAMXAXS
MASMXMMMXAMAMAAMSMSASXMXMAAASMSXXAXXMAXMMAMMMSXMXSMSMMMMSAMMXMMMXMMMMMMAMAMAMXXAAAMXAXAMAMXXASMMMAMASXMSXMXAMMMAXXXAAMAMXXASXSXXAMAMSXAMSMMM
SAMXASMSAMMXMXMXAAMXSAMMMSMMMXMAXSMSMASASASAAXAMAXAMXAAXMSMXASMSMSAMXXMMMAMASAMMSXMSAMXMMXMXMXAASXMAMAXAAXMXSAMSMAMMXSSMSMMSMXMAMMAMASAMAXAM
MMMXMMAAAXSMMAXMMSMMSAMSXMASXSXMMAAMMASMXASMXSXMAMAXSMXMAAXMMMAAASASMMXSSMSASXMAMXMXMAAMMAMAXMXMSXMASXMMSMMASXSXAMXSAMAAXXXMAASXMSASMXMAXMMS
SASXAMXMSMSASASXXMMAMSASASMMASAMSMMMMASXMXMMXSMMXSMMMMXMSMSMMSSMMMAMAAAXSAMXMMMASAXASMSXSASASMSXMMSAMAMAMAMASMMMSXAAAXMMMXXMMXSAXSASXMMAXSXM
SASMSMMXXAXMAAXMASXSXMXSAMXMXMAMAMAAMAMMXMASAMAAMAXSASMAXAAXAAAXXMSSSMMSMXMASXMMSMXMSAXASMSXSAAAMAMASXMASAMAMAAXMMSSMMMAXXMSMXSXMMMMAXMMMSAA
MAMAMASMMSMAMAMAXSXMXSAMXMAMSSMMSSSSMASAMSMMASMXSAMSASMMMSMMMSSMXMAAASMXMAMAMXAASXSXMAMAMASAMXMXMASXMMMASXMMSSMMSAXAASXSMMAMXMMXMAMXSMMMASXM
MAMSMMXMAAXAAAXAMXAMASMMAXAAXAXAAXAAMAXMXAXSXMXAMXMMXMAMMXAAXAMXAMMMMMSAMXSAMSAMXMAXAMXXMXMASAMMSXXAMMMMSASAAAXAMSMSMMAMAMSXMAMAMASXXAXMASAM
SXSAMSAMXMXMSXMAMMMMAMMSXSMMMMMMMSMMMSSMSMMAMXMMMMXXSAMXAXSXSASMSSSMXMMXMMMAXMMSMXSXMMMMMXSASMSAMMSMMAAXSXMMSXMMSAMXXMXMMMMASXSXSASAXMMMASAM
MMSAMSASMMSAAMXSAAMMSXMAMXMMSSMSMSXXAAAAMXSXMASAASXMMSSMMMXXSAMAXAMXAMSMSASMSMAMXAXAMXSASXMXSAMMSAAXSSSMMAMAMXSXSXSSMMMSMAMXMMAMMMMMMSAMXSAM
MASMMSMMAAMXMSAAMMSAMXSXXAXAAAMAAXAMXSMMMASASXSSSSXMAASASXMASAMXMAMMASAAAXAAAMASMMSSMXSXSAAAMAMXMMSXXAMASAMXAAMMMMMXAAAAMMSSSMMMAXAXMSAXAMAM
MMSXXXAMMMMMAMXSMMMMSAMXSSMMSSSMSMMMMMXMMMSAMXMMXMAMMSSMXAMMMXSXMASXMSMSMAMSMSASAMAXSXXXSAMXMAMXMAMXAMMASXSXMMSAMAMXSMSXSAAXXAASXSMSMXMMSXMM
XAXMMSMMXAXMMMAMAXAAMASMAXMAAMXAXAAAXXAMXXMAMXXXASMMMXMASMMXSAMASASAXXAXXMXMAMXSAMAXAMXXSXMMSASXSXMXSMMXSAMXSXSMSAMMMAXAMMSSMXMMAMXAMASAMAMA
MMSMXAAMSXXMAMXXXMMMSAMAMXMMSSMXMSMSSSXSMMSXSSSMASAAMMXMMXXXMMMXMASXMMAXMAMMXMMSAMMASMMMMAXMAMXAAASAXXXXMASXXAMASASMMAMXMAAAMASMSMSASXMASXMS
ASAXSMMMMAAXXMAASXSXMXSSXMXAAAXMMAMMAMXSAXAAAASMAMXMXSMXMXSXXAAXSAXMXSASXXSAMXAMAMXMXAAXSAMSXSMMMMMASMSXSASMMXMAMXMMAXSXMMSSMMMAMASAMXMAMAAA
SMMMMASASMSMXXAMAAMMSMMXSASMMSXMMAXXAXASXMMAMMMMMSAXAXAMMAMXSMSAMXSAMMASXMAXMMSXSAMXSSMMAAXXASXAXXMXMAAXMASAAXMXSXSAXMXMXMXAXXMAMMMSMAMASMMM
AAXMSAMAMAAMAAXXMMMASAMAAMXMXAAMSMSMSMAXASXASXSASAAMSSSXMASMMMAMXXMXAMSMMXMAMAAMAMXAMAXSSMMMMMSMXMXSMMMMMAMMSMMAXXMASMXSASXMMXSASAAASMSMSXSX
SSMMMXSSMSMMSSMAMXSASAMSSMXXAMXMAASAMMMSAMSXSASXSMSMXAAXSASAAAASAAXASXMAMMASMMXSXMMMSSMMAMXAAAMMXSAMAMXAXAXAMAMASMSMAXAMXSAAMMMXMMMMXXMASASX
MMAMXAAAAXXAAAAXMAMXSAMXAMAMSXMMMSMAXAMMMMSXMXMXSXMAMSMXMXSMMXMSMSAMXAMAMSAMAAMXMAMXAMMMAMASMXSAAMAXAMXSSMSMSMMASMAMMMXMMSXMXAXASXSSXSMSMAMX
XSAMMASMMMMSSSMMMXSASAMSMMAMMAMSMMMXMMMASAMASASAXAXXMAXAMXXXMSXMMAAXMAMSMMASXMASXMASMSSSSMXXAAMMSSSMSSMASMAXXXMAMXAXXAASASASMSMMSAAXAMMMMSMM
AMXSAAMMSMMAAXAMXAMAXAMXXSMMMAMAAXAAMXSXMAMAMAMMMSMMXXSSSSMAAMAAASXMMAMMASAMMSASMMASAAAAAXMMMMSMAMASAAMAMXAXSAMXSSSSMMSMAMAMXXAMMXMMMMSXAMAM
XMASMXMXAAXMAXSMMMSASXMSMSAASXSMSSSXSASXSAMSMMMSMAASAMXMAAXAMSSMMMASXMXSAMASAMAXAMAMMXMSMMAMAMAMASMMSSMMSSMSSMXAMAMAXSAMAMSMMXSMAAMASASMXSAM
XMASXAXSSSMXMXMAAMAXMAAXAMSMMAXAAAAMMASAMXSXAAAAAMAMXXMMSMXSXMASXSAMAAMMMXXMASMSMMAXSAMMXAMSASASMSXXXXAXAAXAMXMXMMMAXMAMXSMASAMMSMSSMASMMSMS
SMMMXMXXXAXXSASXMSSSSMMMSMMMMSMXMMXMSMXAXMAXSMSSSXSAXAAAAXXXAMXSMMMSMMMASMMMXMAAAMAXXAXSXSASASASAXXMASMMSSMMSXSMSAMXSSXMSMXAMASXMAMMMMMAXXAX
XSAAAMSSMMMXMAXSAAAMMAXAMAXXAAMMMSMMMXSMMXMAXAAAXAXAASMMSXSMMXAXAAXXMXSAXAAAAMMMMMMSMMMSAAMMAMAMMMMMXXAAAMAXAMAASXXAXXAXAMMMSXMXMAMAAXXXMMXM
SXMXMSAMAXAAMAMMMMSMSAMASXMMSMSAAAAASMSASXSMMSMMMSMMMAAAXMSAMXMMSMSAMMMMSSMSSSMASXMAAAAMXMXMMMAXMAAAMMMMMSMMMMMMMMMMMXMMMSAASAMSSMSSSMMAMXAS
MMSSMMXSXMSXMMSXSAMXXAMMMXAMAASMSSSXSASAMAAXXAMXAXAMXSMMSASXMASAMXSAMAAAAAMAAAXXMAMSSMSSMSXSMSASMSSSMSAAXXMAXAXAMXSAAASAMXMMSAMAAXAAAMXMMXAS
MAAAXMASMXMASAXAMAXASXMXMMSXSMMMMXMAMXMAMSMMSSXSXSMMAAXMAMMXSASAXAXAMXMMSSSSSXMXSSMMAXMAMXAXAMXSAMAMAMSSSMSSSXSXSASMSMSAMXMAMXMSSMMMMMASMSMX
MMSSMMASMASAMXMSMSMMMMMAMXMMMAMXMAMSMMXAMXAXAAASMMASXMMMMMSXMXSXMSSMMSSMAXAAXMAMAXAXSMSAMMMMMMXMMMAMAMXXAAMXSAAAMASAMASAMSMSSMAMMAXSXSMSAAAM
XMAAXMXMMAMAMXAMAXSXMASXSAMASAMAMXMMASMMSXMMMMMMASAMAAMSMAMXAAMAMAAAAAAMSXMMMAAAASMMMASAMXAAAAXMASXSSSXSMXSAMXMSMAMXMAMXMAAMMAAMMSMSAMXMMMMA
MMMSMSMSMSSSSSSMXMSSMASMAASASASXMSXSAMAXMASAXXXMXMAMSMMAMASMSMSAMSSMMXMMMASXXMASXMAMSAMXMSSSSMXXAMMAMXXMAAMASMMAMAXAMSSSSMSMMSXSAAASAMXMASXS
MSAXMSAXAMAAXAMXSMMAMASMSMMXSAMAXAAMXXXMAXSAXSAMXXSMMXSXSASXAAAAXAAAAMSSSXMAXSAMAMXAMAMXXXXAMMSMMSSXMASMMMSAMASASMSMXMAXXMMAAXAMMMXSAMXMASAM
XMASAMMMMMMXMMMAAASAMXXMAMXAMAMXMMSMSXSAMXMAMXAMAAXAMXXXMASXMSMMMSMMMSAAXMMMMAASMMXXSSMXSAMXMAAASAMXXAAXXXMASAMASXAXAMSMAMSMMMMMSSMSAMXMXMAM
MMMMXMXSXMXMMAMXSXMASXSSMSMMSAMSXMAASMSAMXXMASXMSSMAMMMXMASAXAXXAXASMMMXMAAXXMMMXMXMAXAMMMMAMMSMMASXSMMMMMSAMXMXMMSSXSAAAAAXMXMAXAXSMMXSASAM
AAAXAXAMAMAAMAAAMAMASXAAXAAAAAXMAXMXMASAMXXXMXXAAXXAMAMAMSMMXMAMMSXMASMMSSSSXXXXAMASMMXMAASASAMMSXMXMXAAAAMXMXMAMAXAXSMSMSSXMAMMSMMMASASASMS
SSXSAMXSASASXMSXSAMAMMXMMAMXSMMSXMSAMMMMXMASXMMMMSSSSMXAMAAXMMAAXAXMSMAXXAAAMSMSASAXAMXSXXSASXSAXXMASMSXSSSSXSSSSMMMMMXXMMMASXMMAXXSAMMSASAS
MAASAAMSAXAXXAAAMXMSXSXXAAXMMMASXAXAXMAXXXAMAAXAXXAMAMSSSMSMXXAXMAMXAMXSMSMMMAAMXMXSAMXMSMMMMMMMSMMMSMAAXAMMAMAMXXAXAXXXMAMXMAASASMMASAMAMAM
MMMMASMMMMSMMMMSMSMMAXMASASMSMASMSMMSSSMXMMSXMSMSMAMAMAAAAMAMSSSMAMSSSMXAAMXSMSMSAASAMAAAXAMAMAXMXMXMMMMMAMMAMAMSSMSSSMMSMSXSSXMASASAMAMMMSS
MSAMXMXMAAXAXXAAMAAMXMAMMAAAAMASAAAXAAASAMXAXXAAAMXSXSXSMMMXMAAAMAXAAAXMSMSAXMAASAMXASMSMSMSXSAMXAXAXAAASXMSSSMSAAAAAAXAASXAXMXXASXMXSAMXAAA
ASAMXXXSMSSMMMSSSMSMXMSXMXMSMMMSMSSMMSMMSMXASMMSMSMXXXAAXXXXMMSMMSMMSMMXXXMASMMMMXXSXMAXXXMAMMXMSASXSSSXXSAXMXMAMMMMSMMSSSMMMAXMASXMMSASMMSS`;

run();