import { CONFIG } from '../../constants/config'
import { BaseModal } from './BaseModal'
import { Trans, useTranslation } from 'react-i18next'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const PhoNZEModal = ({ isOpen, handleClose }: Props) => {
  const { t } = useTranslation()
  return (
    <><style>{`
    table{
     border:1px solid black;
    }
    th{
      padding-left:10px;
      padding-right:5px;    }    
    td{
        text-align: left;
        padding-left:10px;
        padding-right:5px;    }
    .line {
      border-right:  solid 1px #000;
    }
    strong{bold; color:red}
  `}</style><BaseModal title={t('aboutPhoNZE')} isOpen={isOpen} handleClose={handleClose}>
        <p className="text-sm text-gray-500">
          <Trans>
            This game uses the PhoNZE transcription system for New Zealand English
            based on&nbsp;

            <a
              href="https://www.degruyter.com/document/doi/10.1515/9783110197181-038/html?lang=en"
              className="underline font-bold"
              target="_blank"
            >
              Bauer & Warren (2004)<br></br>
            </a>
            .&nbsp;
          </Trans>
          <Trans>
            <table>
              <tr>  <th colSpan={3} className="line">Vowels</th>  <th colSpan={2}>Consonants</th> </tr>
              <tr> <td><b>Symbol</b></td> <td><b>Lexical set</b></td> <td className="line"><b>Example</b></td>
                <td><b>Symbol</b></td> <td><b>Example</b></td> </tr>
              <tr>
                <td>/ɘ/</td>
                <td>KIT <br></br>commA, lettER</td>
                <td className="line">sh<strong>i</strong>p<br></br>s<strong>a</strong>lute, teach<strong>er</strong></td>
                <td>/p/<br></br>/b/</td>
                <td><strong>p</strong>at<br></br><strong>b</strong>at</td>
              </tr>
              <tr>
                <td>/e/</td>
                <td>DRESS</td>
                <td className="line">b<strong>e</strong>t, st<strong>e</strong>p</td>
                <td>/t/</td>
                <td><strong>t</strong>o<strong>t</strong></td>
              </tr>
            </table>
          </Trans>
        </p>
      </BaseModal></>
  )
}
