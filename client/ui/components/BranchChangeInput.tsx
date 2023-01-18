import { Button, Input, Loading, Modal, Text } from "@nextui-org/react"
import { useState } from "react"
import { toast } from "react-toastify"
import { App, AppByIdDocument, useChangeAppBranchMutation } from "../../generated/graphql"

interface BranchChangeInputProp {
    app: App
}

export const BranchChangeInput = ({ app }: BranchChangeInputProp) => {
    const ghInfo = app.appMetaGithub;


    const [changeBranch, { loading }] = useChangeAppBranchMutation()
    const [name, setName] = useState(ghInfo?.branch ?? "")
    const [showChangeModal, setShowChangeModal] = useState(false)

    if (!ghInfo) return <></>


    return <div>
        <Modal
            open={showChangeModal}
            onClose={() => setShowChangeModal(false)}>
            <Modal.Header>
                <Text h4>Cambiar rama</Text>
            </Modal.Header>
            <Modal.Body>
                <div>
                    ¿Deseas cambiar el nombre de la rama de <b>{ghInfo.branch}</b> a <b>{name}</b>?
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    color="error"
                    size="sm"
                    onClick={() => setShowChangeModal(false)}>
                    Cancelar
                </Button>
                <Button
                    size="sm"
                    onClick={loading ? undefined : () => {
                        changeBranch({
                            variables: {
                                input: {
                                    appId: app.id,
                                    branchName: name,
                                }
                            },
                            refetchQueries: [AppByIdDocument]
                        }).then(res => {
                            setShowChangeModal(false)
                            toast.success("Rama actualizada")
                        }).catch(e => {
                            toast.error("Rama no actualizada")
                        })
                    }}>
                    {loading ? <Loading color="currentColor" type="points-opacity" /> : "Cambiar"}
                </Button>
            </Modal.Footer>
        </Modal>
        <Input
            placeholder='Ej. master, dev, feat'
            label='Nombre de la rama'
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            width="300px"
            labelRight={
                <Button
                    size="xs"
                    disabled={ghInfo.branch === name || !name}
                    onClick={() => setShowChangeModal(true)}
                    light>Cambiar</Button>
            } />
    </div>
}