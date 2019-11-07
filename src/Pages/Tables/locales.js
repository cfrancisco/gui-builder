export default {
    'en-US': {
        simpleTable: {
            headers: {
                desserts: 'Desserts',
                calories: 'Calories (g)',
                fat: 'Fat (g)',
                carbs: 'Carbs (g)',
                protein: 'Protein (g)',
            },
            data: {
                desserts: {
                    frozenYoghurt: 'Frozen yoghurt',
                    iceCreamSandwich: 'Ice cream sandwich',
                    eclair: 'Eclair',
                    cupcake: 'Cupcake',
                    gingerbread: 'Gingerbread',
                    frozenBananaCerealPops: 'Frozen Banana Cereal Pops',
                    chilledStrawberries: 'Chilled Strawberries',
                },
                units: {
                    grams: '{g, plural, =0 {less than a gram} one {# gram} other {# grams}}',
                },
            },
        },
        materialTable: {
            title: 'Editable Table',
            columns: {
                name: 'Name',
                surname: {
                    title: 'Surname',
                    initialEditValue: 'initial edit value',
                },
                birthYear: 'Birth Year',
                birthPlace: 'Birth Place',
            },
            localization: {
                body: {
                    emptyDataSourceMessage: 'No records to display',
                    addTooltip: 'Add',
                    deleteTooltip: 'Delete',
                    editTooltip: 'Edit',
                    filterRow: {
                        filterTooltip: 'Filter',
                    },
                    editRow: {
                        deleteText: 'Are you sure delete this row?',
                        cancelTooltip: 'Cancel',
                        saveTooltip: 'Save',
                    },
                },
                grouping: {
                    placeholder: 'Drag headers ...',
                },
                header: {
                    actions: 'Actions',
                },
                pagination: {
                    labelDisplayedRows: '{from}-{to} of {count}',
                    labelRowsSelect: 'rows',
                    labelRowsPerPage: 'Rows per page:',
                    firstAriaLabel: 'First Page',
                    firstTooltip: 'First Page',
                    previousAriaLabel: 'Previous Page',
                    previousTooltip: 'Previous Page',
                    nextAriaLabel: 'Next Page',
                    nextTooltip: 'Next Page',
                    lastAriaLabel: 'Last Page',
                    lastTooltip: 'Last Page',
                },
                toolbar: {
                    addRemoveColumns: 'Add or remove columns',
                    nRowsSelected: '{0} row(s) selected',
                    showColumnsTitle: 'Show Columns',
                    showColumnsAriaLabel: 'Show Columns',
                    exportTitle: 'Export',
                    exportAriaLabel: 'Export',
                    exportName: 'Export as CSV',
                    searchTooltip: 'Search',
                    searchPlaceholder: 'Search',
                },
            },
        },
    },
    'pt-BR': {
        simpleTable: {
            headers: {
                desserts: 'Sobremesas',
                calories: 'Calorias (g)',
                fat: 'Gorduras (g)',
                carbs: 'Carboidratos (g)',
                protein: 'Proteínas (g)',
            },
            data: {
                desserts: {
                    frozenYoghurt: 'Iogurte congelado',
                    iceCreamSandwich: 'Sanduíche de sorvete',
                    eclair: 'Bomba recheada',
                    cupcake: 'Bolinho',
                    gingerbread: 'Pão de gengibre',
                    frozenBananaCerealPops: 'Pops de cereais de banana congelada',
                    chilledStrawberries: 'Morangos refrigerados',
                },
                units: {
                    grams: '{g, plural, =0 {menos de um grama} one {# grama} other {# gramas}}',
                },
            },
        },
        materialTable: {
            title: 'Tabela Editável',
            columns: {
                name: 'Nome',
                surname: {
                    title: 'Sobrenome',
                    initialEditValue: 'Valor inicial de edição',
                },
                birthYear: 'Ano de nascimento',
                birthPlace: 'Local de nascimento',
            },
            localization: {
                body: {
                    emptyDataSourceMessage: 'Não há registros a serem exibidos',
                    addTooltip: 'Adicionar',
                    deleteTooltip: 'Excluir',
                    editTooltip: 'Editar',
                    filterRow: {
                        filterTooltip: 'Filtro',
                    },
                    editRow: {
                        deleteText: 'Tem certeza de que deseja excluir esta linha?',
                        cancelTooltip: 'Cancelar',
                        saveTooltip: 'Salvar',
                    },
                },
                grouping: {
                    placeholder: 'Arrastar cabeçalhos ...',
                },
                header: {
                    actions: 'Ações',
                },
                pagination: {
                    labelDisplayedRows: '{from}-{to} de {count}',
                    labelRowsSelect: 'Linhas',
                    labelRowsPerPage: 'Linhas por página:',
                    firstAriaLabel: 'Primeira página',
                    firstTooltip: 'Primeira página',
                    previousAriaLabel: 'Página anterior',
                    previousTooltip: 'Página anterior',
                    nextAriaLabel: 'Próxima página',
                    nextTooltip: 'Próxima página',
                    lastAriaLabel: 'Última página',
                    lastTooltip: 'Última página',
                },
                toolbar: {
                    addRemoveColumns: 'Adicionar ou remover colunas',
                    nRowsSelected: '{0} linha(s) selecionadas',
                    showColumnsTitle: 'Mostrar colunas',
                    showColumnsAriaLabel: 'Mostrar colunas',
                    exportTitle: 'Exportar',
                    exportAriaLabel: 'Exportar',
                    exportName: 'Exportar como CSV',
                    searchTooltip: 'Procurar',
                    searchPlaceholder: 'Procurar',
                },
            },
        },
    },
};
