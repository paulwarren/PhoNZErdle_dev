import { CONFIG } from './config'

export const WORDS = [
 "næebɘz",
"nɐʉbɘl",
"goːdʒɘs",
"plɛnz",
"sevɘn",
"mɛdʒɘk",
"kliɘliː",
"nɑetmeɘ",
"pɵːsɘn",
"lɒŋgɘ",
"ɛkses",
"pɹɘtiː",
"ɘsjʉːm",
"spɹɘŋ",
"boːɹɘŋ",
"siɘɹiːz",
"gɹɐːnt",
"tɘkɘt",
"splɘt",
"lɐːʤliː",
"ɹæesɘz",
"oːkwɘd",
"ɐʉpɘnd",
"ɵːdʒɘnt",
"kæʉntiː",
"foːmɘl",
"gɹɛnt",
"ɘfekt",
"fɑetɘŋ",
"siːsɑed",
"ɛθliːt",
"tæestiː",
"stɒpt",
"kæesɘz",
"letɘz",
"ɹiːsnt",
"spiːks",
"ɐːskɘŋ",
"bɹɑeɘn",
"ɹiːtæel",
"ɘnkɐm",
"welθɘ",
"plæest",
"ʤɵːmɘn",
"næekɘd",
"blɛŋk",
"blɐːst",
"mɛɹɘdʒ",
"sɘstɘ",
"miːnɘŋ",
"kɛmɹɘ",
"ɹæelwæe",
"ɘmæezd",
"dɹɐgz",
"ɛktɘv",
"tɐʧɘŋ",
"dɛmɘdʒ",
"pɐʉlɘʃ",
"tiːʧɘŋ",
"kɹæezɘ",
"setɘŋ",
"fɘget",
"bjʉːtɘ",
"biːkoːz",
"mɒdɘl",
"medɘl",
"pɹɘnt",
"moːgɘʤ",
"hɘtɘŋ",
"jʉːsɘz",
"tæekɘn",
"ʃɑenɘŋ",
"tæekɘŋ",
"iːvnɘŋ",
"mɐsɘl",
"pʊtɘŋ",
"ɛŋgɹiː",
"mɐŋkiː",
"kɘʧɘn",
"dʒɛkɘt",
"pɘkɘŋ",
"dɘziːz",
"ʃiɘɹɘŋ",
"hɛvɘŋ",
"mɘʃɘn",
"ɹɒkɘt",
"θɹʉːæʉt",
"ɘntɑeɘ",
"fiːdɘŋ",
"bɘldɘ",
"ɹiːzɘn",
"lɘŋkt",
"hɛndɘ",
"spɐnʤ",
"hɑeɘst",
"mɐːstɘ",
"sɛlɘŋ",
"pɹɘfɵː",
"levɘl",
"stɹɘp",
"ʤɑeɘnt",
"sɘŋgl",
"ʧoesɘz",
"gɹɐʉɘŋ",
"æʉtsɑed",
"sɒsɘdʒ",
"pæʉndz",
"gɹɛnɘ",
"dʒɘndʒɘ",
"wɘmɘn",
"ɹɘviːl",
"klæʉdz",
"pɐːsɘŋ",
"ɹɘmæen",
"ɘwoːdz",
"koːzɘŋ",
"bɛdliː",
"stɐdɘ",
"siːzɘn",
"lemɘn",
"vɵːsɘz",
"hʉːevɘ",
"tɹɐst",
"endɘŋ",
"fɛnsiː",
"woːnɘŋ",
"pɐːsɘz",
"dʒɘpɛn",
"gɘvɘn",
"kɐlɘd",
"θɛtʃɘ",
"plɐːnt",
"ɒnlɑen",
"pɒlɘʃ",
"pɹɘtɘ",
"pɛkɘʤ",
"ɹɐʉlɘŋ",
"lɛtɘn",
"dɐːlɘŋ",
"tiːʧɘz",
"wɘndz",
"wɘndɘ",
"gɛmbl",
"æʉtfɘt",
"mɐndæe",
"bentʃ",
"fiːmæel",
"kɘlɘŋ",
"mɘɹiːn",
"dɘnɑed",
"bɘlɒŋ",
"stɘkɘ",
"ɘfekt",
"ʤʉːnjɘ",
"ɑetɘmz",
"fɒɹɘn",
"mɛʧɘz",
"viːɘkl",
"wʊdɘn",
"ʤʉːliːɘ",
"fiːʧɘz",
"vɐʉtɘŋ",
"gɘltɘ",
"ɐːnsɘz",
"fɹɑedæe",
"fɐʉkɘs",
"pɛnɘk",
"doːtɘz",
"fɹɐnt",
"membɘ",
"lɐːfɘŋ",
"ʧæesɘŋ",
"sɛlɘd",
"spend",
"lɐvɘŋ",
"pɐːdɘn",
"ɹekoːd",
"flæevɘ",
"lɐvliː",
"wɘnɘŋ",
"wɒʃɘŋ",
"lɐʉnlɘ",
"mɛɹiːɘ",
"ɹæʉndz",
"pjɐːnɐʉ",
"dɘvɑes",
"bɛkɘŋ",
"θɛŋks",
"dɒktɘ",
"næetɘv",
"dʒʉːnjɘ",
"dæʉnɘŋ",
"sɵːvɘs",
"pɘɹæed",
"mɐŋkɘ",
"ɹɘʧɐːd",
"ɹɘpiːt",
"vɘʒɘn",
"dɘsɑed",
"ɘploːz",
"wɐndɘ",
"dɐːnsɘ",
"ɛktɘŋ",
"ʤɛpɛn",
"loːntʃ",
"pɛɹɘs",
"mediːɘ",
"sɐθɘn",
"tɐmbl",
"fɘgɘz",
"splɛʃ",
"lesɘn",
"pɐːtiːz",
"sɘvɑev",
"bɘkɐm",
"ɹekɘn",
"lɵːnɘŋ",
"ɘmæʉnt",
"ɹɐnɘŋ",
"θɹɘld",
"elsweɘ",
"blɑend",
"kæʉntɘ",
"kɒtɘdʒ",
"bɘkɒz",
"ɘtɛks",
"gɛvɘn",
"tʃɘlɘ",
"piːsɘz",
"æendʒɘl",
"ʤɐmpt",
"ɹentl",
"getɘŋ",
"lɐʉnliː",
"loːɹɘn",
"dedlɘ",
"diːsnt",
"pɛtɘn",
"pæepɘz",
"hæʉevɘ",
"oːlwɘz",
"sɑeɘns",
"hɒldz",
"dezɘt",
"dɹɐːmɘ",
"æeliːɘn",
"bɘdɘŋ",
"ɘstæet",
"tɹʉːliː",
"ɘbjʉːz",
"pɹɘns",
"sentɘ",
"jʉːnɘt",
"wɘndɐʉ",
"mɒɹɘl",
"pɘkʧɘ",
"kɹiːæet",
"bɐːgɘn",
"edɘtɘ",
"lɘndɘ",
"pɹɘpeɘ",
"hɐːfwæe",
"gloːɹiː",
"ɹɘzɵːv",
"bɘliːf",
"tʃɑenɘ",
"plæeɘz",
"fæʉndd",
"hɛlpt",
"dʒelɘs",
"mɒdɘn",
"tɛlɘŋ",
"ɐnles",
"biːtɘŋ",
"ɹɘvɵːs",
"gɹɛnd",
"skɹɛp",
"sɘtɘŋ",
"ɘdiːɘt",
"kiːpɘŋ",
"dɐbɘl",
"ɘkɹɒs",
"ɹɘmʉːv",
"tekst",
"oːkʃɘn",
"wɘkɘd",
"plɛnt",
"ɑelɘnd",
"æeʤɘnt",
"emptiː",
"oːdnɹɘ",
"noːθɘn",
"ɛndɹʉː",
"ɘtɛkt",
"hæetɘd",
"tɐnɘl",
"djʉːtiː",
"sɐfɘd",
"fɘgɘv",
"skwiːz",
"pʊʃɘŋ",
"fɐːmɘŋ",
"gɘvɘŋ",
"pɹɒpɘ",
"eniːwæe",
"ʃɒpɘŋ",
"ɐlstɘ",
"fɹɛŋk",
"koːzɘz",
"æepɹɘl",
"bɘkæem",
"dɑeɘɹɘ",
"bɘniːθ",
"tɐʉtɘl",
"metɘl",
"plæeɘŋ",
"gʊdbɑe",
"kæebɘl",
"fæesɘz",
"ɘgɹiːd",
"dɹɒpt",
"stæebl",
"blɐdiː",
"mɐːtɘn",
"kʊʃɘn",
"kɘmpeɘ",
"dæenʤɘ",
"kɐːsɘl",
"θɹɐʉɘŋ",
"pliːzd",
"ʃʉːtɘŋ",
"pleʒɘ",
"pɛkɘdʒ",
"æeljɘn",
"ɹɐʉmɘn",
"kɒmɘk",
"spoːts",
"bɘsɑed",
"tɑemɘŋ",
"ɹiːʤɘn",
"ɹɘðɘm",
"fɛkts",
"gɐːlɘk",
"pɒkɘt",
"ɹɘfɵːd",
"stɹɘŋ",
"wɘðɘn",
"klevɘ",
"sæefliː",
"tɐːgɘt",
"mɛsɘv",
"vɛljʉː",
"gɐːdɘn",
"bɘliːv",
"ɘdɹes",
"θɵːzdæe",
"entɘd",
"nɵːvɘs",
"wedɘŋ",
"ɘnʤoed",
"ʧæenʤd",
"foːlɘŋ",
"mɛnɘʤ",
"vɘzɘt",
"hɛkɘŋ",
"liːgɘl",
"ɹæesɘŋ",
"henɹiː",
"wɘntɘ",
"fɒlɐʉd",
"ɛkʃɘn",
"ɘndiːd",
"ɹɘvjʉː",
"sɐʉlʤɘ",
"ʤɐʉzɘf",
"fæeljɘ",
"ɹɑevɘl",
"klɐʉzd",
"klɐʉzɘ",
"bɒtɘl",
"skʉːlz",
"wɘndiː",
"skiːmz",
"fɹɐːns",
"ɘɹest",
"dɘzɑeɘ",
"fjʉːɘl",
"noːmɘn",
"dɹiːmz",
"wɵːkɘŋ",
"wæetɘd",
"fɹenʧ",
"gɛɹɐːʒ",
"vɘlɘdʒ",
"hɛpɘn",
"fiːlɘŋ",
"sɵːkɘl",
"kɐːpɘt",
"ɒkʃɘn",
"nɵːsɘz",
"hjʉːmɘ",
"pɵːʧɘs",
"dæetɘŋ",
"pʊlɘŋ",
"ɘnvɑet",
"ʃɛɹɘn",
"kɐːbɘn",
"welθiː",
"sɒlɘd",
"sɐʉʃɘl",
"dɘʃɘz",
"ɹʊɘɹɘl",
"ɹɘtɘn",
"kɐtɘŋ",
"setɘl",
"tæebɘl",
"ɹɘpoːt",
"weɘɹɛz",
"sɘkjʊɘ",
"sɛmɘn",
"mɐʉʃɘn",
"tɹeʒɘ",
"ʤæesɘn",
"pɘliːs",
"bɛlʉːn",
"hæʉzɘŋ",
"kɐɹɘʤ",
"sjʉːpɘ",
"smoːlɘ",
"sɘmpl",
"stɘkiː",
"denɘs",
"fæesɘŋ",
"lɒsɘz",
"tɛkɘl",
"iːkwɘl",
"diːenæe",
"tɑetɘl",
"sɘtiːz",
"endʒɘn",
"θɵːzdɘ",
"ɛŋgɘl",
"kɘdɘŋ",
"stept",
"noːmɘl",
"menjʉː",
"kwoːtɘ",
"stɹes",
"seʃɘn",
"ɘskæep",
"vɐʉtɘd",
"dedliː",
"stɹiːm",
"mɘʃiːn",
"pɐːtliː",
"hɐːdliː",
"oːgɘst",
"ɑeɘɹɘʃ",
"sæelɘŋ",
"moːnɘŋ",
"ɛktɘz",
"sɐmweɘ",
"empɑeɘ",
"lʉːzɘŋ",
"fɘtɘd",
"kiɘfliː",
"kɵːnɘl",
"ɹɘŋɘŋ",
"wɒʧɘŋ",
"bɹæeks",
"bɐbɘl",
"bæebiːz",
"miːtɘz",
"fɘnɘʃ",
"ɘsliːp",
"enɘʤiː",
"loːnʧt",
"tɹɛvl",
"ɘfɹæed",
"wiɘɹɘŋ",
"spiːkɘ",
"ʤɘnʤɘ",
"kæʉnsl",
"tʃest",
"ʧɘkɘn",
"ɐnlɑek",
"bɒtlz",
"ɐːtɘst",
"ɹɐʃɘn",
"ɘnkɘm",
"mɘsɘz",
"wepɘn",
"ɹedɘŋ",
"stɛnd",
"stɹɑek",
"iːstɘn",
"sɐmɘt",
"pɹɛŋk",
"dɒktɘ",
"keɘfɘl",
"mɐʉbɑel",
"ɘnʧɘz",
"sektɘ",
"tɛksɘ",
"skʊlz",
"tɹɐbl",
"mesɘdʒ",
"ɘnɐðɘ",
"joːkʃɘ",
"wɘsɘl",
"engæeʤ",
"fɘʃɘŋ",
"pɹeʃɘ",
"ʧɐːʤɘz",
"dɹest",
"mɘstɘ",
"bɹɛnd",
"sɑekɘl",
"fæemɘs",
"fɑenɘl",
"klɐʉðz",
"dʒɐŋgl",
"lɑekliː",
"ɘnʤɘd",
"stæets",
"letɘŋ",
"kɘnɛl",
"ɐʉpnɘŋ",
"ɘnles",
"noːðɘn",
"skɘlz",
"ɹɘmɐʉt",
"dɹoːɘŋ",
"snʉːkɘ",
"bɹæenz",
"pɐːkɘŋ",
"ɘlnɘs",
"wɘðæʉt",
"ʧekɘŋ",
"bɐtɘn",
"swɘtʃ",
"bɒtɘm",
"lʊkɘŋ",
"hæʉsɘz",
"kɐmɘŋ",
"stɹiːt",
"mɐndɘ",
"mʉːvɘŋ",
"ʃɐʉldɘ",
"wɐɹiːd",
"tests",
"tɹæend",
"wendiː",
"ɒpɘɹɘ",
"mesɘʤ",
"ɹɘfoːm",
"foːlɘn",
"flæʉɘz",
"jʉːɹɐʉp",
"bɹɒnz",
"ʧɐʉzɘn",
"stoːɹiː",
"tenɘs",
"sɐndɘ",
"ɘɹɑevd",
"enʤɘn",
"lɑebɹiː",
"sɘplɑe",
"bɘgɘn",
"dʒɐʉzɘf",
"mɑendz",
"dɹɘvn",
"ɹɛbɘt",
"skwɒd",
"kɐbɘd",
"hɛndiː",
"bæesɘs",
"ɐnæebl",
"kɐlʧɘ",
"mɘdɘl",
"mɛtɘz",
"læebɘl",
"venjʉː",
"pɛʃɘn",
"pɹɘzn",
"bɛtɘl",
"ɒlstɘ",
"oːgɐst",
"toːkɘŋ",
"skɹiːn",
"nɒlɘʤ",
"ɹæeʒiːm",
"bɵːθdæe",
"ɐʉbɐːmɘ",
"gɹæʉnd",
"dɹɘŋk",
"ɹæedɘɐʉ",
"twɘst",
"ɐnnɐʉn",
"stɒps",
"liːvɘŋ",
"tɒmɘs",
"stæeɘŋ",
"ɘvent",
"ɹæediːɐʉ",
"æedʒɘnt",
"ɹiːfoːm",
"vɐʉtɘz",
"kevɘn",
"oːlwæez",
"ɛvɹɘʤ",
"woːkɘŋ",
"nɐmbɘ",
"mæekɘŋ",
"tiːtʃɘ",
"klæemd",
"vɵːsɘz",
"dɘgɘŋ",
"entɑeɘ",
"diːlɘŋ",
"ɹɘzoːt",
"tʃɑeld",
"pɘfoːm",
"dɘbæet",
"telɘŋ",
"sɵːtɘn",
"sɘpoːt",
"bɘgɐn",
"sɘŋɘŋ",
"næeʃɘn",
"vɘlɘʤ",
"lɐvlɘ",
"sæevɘŋ",
"pɛnɘl",
"dɑeɘɹiː",
"enɘmiː",
"ɛlbɘm",
"pʊdɘŋ",
"pɹʉːvd",
"liːdɘz",
"ɒpʃɘn",
"lɘsɘn",
"ɘnoeɘŋ",
"dɛmɘʤ",
"fɹend",
"tiːnæeʤ",
"tʃæendʒ",
"fæelɘŋ",
"welfeɘ",
"ɵːʤɘnt",
"toelɘt",
"mɛɹiːd",
"θɘŋks",
"tʃɐːns",
"klæʉdɘ",
"sɵːʧɘŋ",
"bɵːnɘŋ",
"diːtæel",
"ɒkʃniɘ",
"ɒɹɘndʒ",
"mentl",
"ɘdmɘt",
"steps",
"wʊmɘn",
"kɘmɘt",
"eniːweɘ",
"wæetɘŋ",
"blɐdɘ",
"kʊkɘŋ",
"lɘtɘl",
"mɛdɘm",
"diːpliː",
"hɛŋɘŋ",
"sɘpɐʉz",
"fɘlɘŋ",
"ʧɑeniːz",
"kɐvɘd",
"dɘzɵːt",
"pɛstɘ",
"bɹɐðɘ",
"ɹiːɛkt",
"sɵːfɘs",
"tɹɐʉfɘ",
"siːkɘŋ",
"siːlɘŋ",
"mɛɹɘʤ",
"bɑebɘl",
"mɛʤɘk",
"piːpɘl",
"fɒlɐʉz",
"ɛlɘks",
"mɐːkɘt",
"sɘlvɘ",
"tæestɘ",
"pɐntʃ",
"stɐːtɘ",
"meʒɘz",
"kɘkɘŋ",
"ɹɘsks",
"nɒvɘl",
"tɘnɑet",
"fɛʃɘn",
"sɒsɘʤ",
"ɘmɵːʤd",
"ʃæekɘŋ",
"ɘdvɑes",
"tɹɑeɘŋ",
"hɘdɘn",
"nɵːsɹɘ",
"pjɛnɐʉ",
"ʤɐʤɘz",
"stedɘ",
"ɛdɘmz",
"ʧɛnɘl",
"stediː",
"ɹɘkoːd",
"miːtɘŋ",
"ɹiːʧɘŋ",
"ʃeltɘ",
"twɘtɘ",
"bɹɑetɘ",
"ʧɐːmɘŋ",
"enɘdʒɘ",
"piːɛnɐʉ",
"vɵːʒɘn",
"lɵːnɘd",
"bɐdʒɘt",
"dɑenɘŋ",
"ɘngæedʒ",
"voesɘz",
"ɒfɘsɘ",
"fjʉːʧɘ",
"ʤʉːdɘθ",
"fiːtʃɘ",
"ɛŋʃɘs",
"stɹɒŋ",
"siːɘɹiːz",
"djʉːtɘ",
"sɘpɵːb",
"sɐðɘn",
"sɘɹiːɘ",
"sæʉndz",
"nɐʉtɘs",
"bjʉːtiː",
"mɑenɘs",
"beɘɹɘŋ",
"piːtsɘ",
"pɛlɘs",
"stɹeʧ",
"pɑelɘt",
"ɹɘliːf",
"gɹæetɘ",
"wɘlɘŋ",
"ʤoenɘŋ",
"ɘʧiːvd",
"jʉːzɘŋ",
"mɐnθs",
"ɒɹɘnʤ",
"fɐʉtɐʉz",
"mɛnɘdʒ",
"ɐntɘl",
"ɘpɹɐʉʧ",
"hɛndz",
"fɐndz",
"fɐkɘŋ",
"fɹɑedɘ",
"hɛlθiː",
"tɹɘkɘ",
"fɘŋgɘ",
"dʒɑeɘnt",
"ɐnjɘn",
"hevɘn",
"dɹɑevɘ",
"ɹɘwoːd",
"bɘhɐːf",
"bɘʃɘp",
"enɘweɘ",
"bɘlʉːn",
"dʒentl",
"ɛŋgɹɘ",
"fɒstɘ",
"iɘɹiːɘz",
"sæeftɘ",
"dɘzɵːv",
"ɒlɘvɘ",
"tɵːnɘŋ",
"mɘnɘt",
"bɐkɘt",
"gests",
"spɹed",
"pɛnts",
"mɑekɘl",
"hiɘɹɘŋ",
"kæʉntɘ",
"nɑesliː",
"miːdiːɘ",
"dɒlɘz",
"ɹʉːɹɘl",
"hɛndl",
"sæeftiː",
"fɛktɘ",
"ɹɐgbiː",
"goːʤɘs",
"sɐmhæʉ",
"stɛmp",
"lɘmɘt",
"lɐntʃ",
"bɐʉnɘs",
"kɒsts",
"jɐŋgɘ",
"mɘsɘŋ",
"ɐŋkɘl",
"lɘŋks",
"hɐʉpɘŋ",
"nekst",
"blɐʉɘŋ",
"kɐpɘl",
"fɘlmd",
"ɹɘsiːv",
"skɹɛʧ",
"nɒlɘdʒ",
"kɹæeziː",
"skɹɐm",
"spiːtʃ",
"fɘlɘp",
"soːtɘd",
"ɹɐsɘl",
"ɹɘvɘz",
"ɘkæʉnt",
"dɘzɵːt",
"bɐʤɘt",
"ʤɛkɘt",
"nɐːstiː",
"kɛpʧɘ",
"sɵːvɘŋ",
"stɐʉnz",
"ʤelɘs",
"fɛnsɘ",
"ɘpɐʉzd",
"sɐndæe",
"koːlɘŋ",
"hɑedɘŋ",
"stɹɐk",
"ɹæezɘŋ",
"ɹæenbɐʉ",
"dɹɐŋk",
"ʧeɘmɘn",
"klæʉdiː",
"dɘfiːt",
"spɑedɘ",
"ɒnɘst",
"hɐʉtel",
"ɹɐfliː",
"bɘhæev",
"gɹʉːps",
"fɘgɒt",
"klɐʉsɘ",
"ɛdɐlt",
"kɐɹɘdʒ",
"pɵːpɘl",
"ɹɘliːs",
"bæekɘŋ",
"fɐːstɘ",
"ɛlbɘt",
"deɹɘk",
"nɒkɘŋ",
"helɘn",
"nɐːstɘ",
"ɹɒbɘn",
"hedɘŋ",
"viɘkɘl",
"tʃɐʉzn",
"emptɘ",
"vɵːsɘs",
"æʉtkɐm",
"ledɘŋ",
"æenʤɘl",
"wɒnts",
"tʃɵːtʃ",
"kɛtɘl",
"flɑeɘŋ",
"poents",
"kɹɑeɘŋ",
"sɐdɘn",
"stoːɹɘ",
"miːʃɛl",
"lɐʉkɘl",
"siːnjɘ",
"ɹɘsɵːʧ",
"ɘɹæʉnd",
"ɹɑedɘŋ",
"bæesɘk",
"enɘmɘ",
"sɐʉldʒɘ",
"ɘfens",
"kɛʧɘŋ",
"kɒtɘʤ",
"memɹiː",
"sɘvɘl",
"fɹɐʉzn",
"dɘzɑen",
"hiːtɘŋ",
"spɒts",
"ɹɘgɐːd",
"ɘbjʉːs",
"seksiː",
"klæemz",
"ɹɘtɵːn",
"bæekɘn",
"ʃɒkɘŋ",
"hɐntɘ",
"lɘvɘŋ",
"kɹɑemz",
"stɐːts",
"moːgɘdʒ",
"ɹɐbɘʃ",
"ɹiːdɘŋ",
"ʤɐʉkɘŋ",
"miːdjɘ",
"koːsɘz",
"fʉːtɘʤ",
"efɘts",
"tʃeɹɘ",
"ɹʉːtiːn",
"niːdɘd",
"ʃɐːlɘt",
"ɹɑezɘŋ",
"kɛɹɘl",
"sɛdliː",
"vɑetɘl",
"kɐzɘn",
"iːzɘliː",
"slɐʉliː",
"kɒlɘʤ",
"ɐpset",
"læediːz",
"ɹiːliːs",
"dɘgɹiː",
"tɹɑeɘl",
"foːʧɘn",
"wɵːkɘz",
"ɘlæʉɘŋ",
"lɑeklɘ",
"kwɑeɘt",
"enɘwæe",
"ʧæembɘ",
"kɒlɘdʒ",
"mæenliː",
"skeɘɹiː",
"kɛɹiːd",
"wɑelst",
"tɛksiː",
"gɘltiː",
"bɹest",
"ɛntiːk",
"gloːɹɘ",
"gɛðɘd",
"plɛnd",
"dekæed",
"foːwɘd",
"ɘwoːdd",
"kɹiːʧɘ",
"helθɘ",
"pɐːtnɘ",
"ɘntɘl",
"ɘbɹoːd",
"bɐntʃ",
"ʃoːtliː",
"nɐθɘŋ",
"stɹæet",
"vɘdiːɐʉ",
"mɛθjʉː",
"ɘtʃiːv",
"kɒliːg",
"bɘgɛn",
"bɵːlɘn",
"spent",
"dæevɘd",
"ɘnsɑed",
"ɛnsɘd",
"dæendʒɘ",
"hiɘɹɐʉz",
"kɒmɘn",
"tʃiːkɘ",
"foːsɘz",
"endɘd",
"ɹɑetɘŋ",
"stɐdiː",
"spɐndʒ",
"ʃæʉtɘŋ",
"nɑeʤɘl",
"jʉːniːk",
"meθɘd",
"sʉːzɘn",
"kɛnsɘ",
"næetʃɘ",
"stɹɐʉk",
"devɘl",
"pɵːpɘs",
"fiːldz",

];

if (CONFIG.normalization) {
  WORDS.forEach((val, i) => (WORDS[i] = val.normalize(CONFIG.normalization)))
}

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

if (CONFIG.shuffle) {
  shuffle(WORDS)
}
