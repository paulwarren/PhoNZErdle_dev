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
    <BaseModal title={t('aboutPhoNZE')} isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500">
        <Trans
       >
          This game uses the PhoNZE transcription system for New Zealand English
          based on&nbsp; 

          <a
            href="https://www.degruyter.com/document/doi/10.1515/9783110197181-038/html?lang=en"
            className="underline font-bold"
            target="_blank"
          >        
          Bauer & Warren (2004)
          </a>
          .&nbsp;
        </Trans>
        <Trans>
          Check out an&nbsp;
          <a
            href="https://www.wgtn.ac.nz/llc/llc_resources/phonze/"
            className="underline font-bold"
            target="_blank"
          >
            interactive guide
          </a>
           &nbsp;to PhoNZE
        </Trans>
      </p>
    </BaseModal>
  )
}
