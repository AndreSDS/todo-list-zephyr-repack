import { Text, View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { Todo, useTodos } from "./TodoContext";

interface TodoItemProps extends Todo {
    index: number;
}

export const TodoItem = ({ title, description, completed, index }: TodoItemProps) => {
    const { updateTodo, removeTodo, toggleCompleted } = useTodos();
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(title);
    const [editDescription, setEditDescription] = useState(description);

    const handleSave = () => {
        updateTodo(index, { title: editTitle, description: editDescription });
        setIsEditing(false);
    };

    return (
        <View style={[styles.container, completed && styles.completed]}>
            {isEditing ? (
                <>
                    <TextInput
                        style={styles.input}
                        value={editTitle}
                        onChangeText={setEditTitle}
                        placeholder="Título"
                    />
                    <TextInput
                        style={styles.input}
                        value={editDescription}
                        onChangeText={setEditDescription}
                        placeholder="Descrição"
                    />
                    <View style={styles.actions}>
                        <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
                            <Text style={styles.actionText}>Salvar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cancelBtn} onPress={() => setIsEditing(false)}>
                            <Text style={styles.actionText}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </>
            ) : (
                <>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.description}>{description}</Text>
                    <Text style={styles.status}>{completed ? "Concluído" : "Pendente"}</Text>
                    <View style={styles.actions}>
                        <TouchableOpacity style={styles.editBtn} onPress={() => setIsEditing(true)}>
                            <Text style={styles.actionText}>Editar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.deleteBtn} onPress={() => removeTodo(index)}>
                            <Text style={styles.actionText}>Excluir</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.completeBtn} onPress={() => toggleCompleted(index)}>
                            <Text style={styles.actionText}>{completed ? "Desfazer" : "Concluir"}</Text>
                        </TouchableOpacity>
                    </View>
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 12,
        marginVertical: 6,
        borderRadius: 8,
        backgroundColor: '#f2f2f2',
        borderWidth: 1,
        borderColor: '#ddd',
    },
    completed: {
        backgroundColor: '#d4edda',
        borderColor: '#28a745',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 4,
    },
    description: {
        fontSize: 14,
        color: '#555',
        marginBottom: 4,
    },
    status: {
        fontSize: 12,
        color: '#888',
        fontStyle: 'italic',
        marginBottom: 8,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 8,
    },
    editBtn: {
        backgroundColor: '#007bff',
        padding: 6,
        borderRadius: 4,
        marginRight: 4,
    },
    deleteBtn: {
        backgroundColor: '#dc3545',
        padding: 6,
        borderRadius: 4,
        marginRight: 4,
    },
    completeBtn: {
        backgroundColor: '#28a745',
        padding: 6,
        borderRadius: 4,
    },
    saveBtn: {
        backgroundColor: '#28a745',
        padding: 6,
        borderRadius: 4,
        marginRight: 4,
    },
    cancelBtn: {
        backgroundColor: '#6c757d',
        padding: 6,
        borderRadius: 4,
    },
    actionText: {
        color: '#fff',
        fontSize: 13,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 6,
        marginBottom: 6,
        fontSize: 14,
        backgroundColor: '#fff',
    },
});